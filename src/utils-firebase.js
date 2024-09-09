import { db, storage, collection, getDocs, query, where, addDoc, deleteDoc, doc, ref, uploadBytes, getDownloadURL, deleteObject, updateDoc, limit,Timestamp } from './firebase-config';

const filterOptions = [
  { value: "emr", label: "Emergency" },
  { value: "htp", label: "Health Tips" },
  { value: "med", label: "Medicine" },
  { value: "nut", label: "Nutrition" },
  { value: "fit", label: "Fitness" },
  { value: "men", label: "Mental Health" },
];

function formatDate(dateInput) {
  try {
    let date;

    if (dateInput instanceof Date) {
      date = dateInput;
    } else if (dateInput && typeof dateInput.seconds === 'number') {
      date = new Date(dateInput.seconds * 1000);
    } else if (typeof dateInput === 'string') {
      const [datePart, timePartWithZone] = dateInput.split(' at ');
      if (!datePart || !timePartWithZone) {
        throw new Error('Invalid date string format');
      }
      const [timePart, zonePart] = timePartWithZone.split(' UTC');
      const formattedDateString = `${datePart} ${timePart} UTC${zonePart}`;
      date = new Date(formattedDateString);
    } else {
      throw new Error('Unrecognized date input type');
    }

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date conversion');
    }

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);

  } catch (error) {
    return 'Invalid date';
  }
}

const adminFilterOptions = [
  { value: "all", label: "All" },
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
];

const fetchAllArticles = async () => {
  try {
    const articlesCollection = collection(db, 'blog_post');
    const q = query(articlesCollection, where('publish', '==', true));
    const articlesSnapshot = await getDocs(q);

    const data = articlesSnapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    return [];
  }
};

const filterByCategory = async (category) => {
  const articlesCollection = collection(db, 'blog_post');
  let q;
  if (category === 'all') {
    q = query(articlesCollection, where('publish', '==', true));
  } else {
    q = query(articlesCollection, where('publish', '==', true), where('categories', 'array-contains', category));
  }
  const articlesSnapshot = await getDocs(q);
  return articlesSnapshot.docs.map(doc => doc.data());
};

const suggestArticles = async () => {
  try {
    const articlesCollection = collection(db, 'blog_post');
    const q = query(articlesCollection, where('publish', '==', true), limit(3));
    const articlesSnapshot = await getDocs(q);
    return articlesSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching suggested articles:', error);
    return [];
  }
};

const getArticleBySlug = async (slug, admin = false) => {
  try {
    const articlesCollection = collection(db, 'blog_post');
    let q;
    if (admin) {
      q = query(articlesCollection, where('slug', '==', slug));
    } else {
      q = query(articlesCollection, where('slug', '==', slug), where('publish', '==', true));
    }
    const articlesSnapshot = await getDocs(q);

    if (!articlesSnapshot.empty) {
      const data = articlesSnapshot.docs[0].data();
      if (admin) {
        data.id = articlesSnapshot.docs[0].id;
      }
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const AdminfetchAllArticles = async () => {
  const articlesCollection = collection(db, 'blog_post');
  const articlesSnapshot = await getDocs(articlesCollection);
  return articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const AdminfilterByCategory = async (category) => {
  const articlesCollection = collection(db, 'blog_post');
  let q;
  if (category === 'all') {
    q = query(articlesCollection);
  } else if (category === 'published') {
    q = query(articlesCollection, where('publish', '==', true));
  } else {
    q = query(articlesCollection, where('publish', '==', false));
  }
  const articlesSnapshot = await getDocs(q);
  return articlesSnapshot.docs.map(doc => doc.data());
};

const generateSlug = (date, title) => {
  const formattedDate = new Date(date).toISOString().slice(0, 10);
  const formattedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/(^-|-$)+/g, '');   

  return `${formattedDate}-${formattedTitle}`;
};

const createArticle = async (articleData) => {
  const imageFile = articleData.get('image');
  let imageUrl = 'https://fakeimg.pl/600x400?text=OneClick-Med&font=bebas';
  if (imageFile && imageFile.size > 0) {
    const identifier = Date.now();
    imageUrl = await uploadFile(imageFile, `blogImages/${imageFile.name}_${identifier}`);
    articleData.append('image_file_name', `${imageFile.name}_${identifier}`);
  }
  articleData.delete('image');
  articleData.append('coverImage', imageUrl);

  const dateStr = articleData.get('createdAt');
  const title = articleData.get('title');
  const slug = generateSlug(dateStr, title);
  articleData.append('slug', slug);
  const blogURL = `https://www.oneclickmed.ng/blog/${slug}?appview=true`;
  articleData.append('blogURL', blogURL);

  // Prepare the article data object
  const articleDataObject = {};
  articleData.forEach((value, key) => {
    if (key === 'publish') {
      articleDataObject[key] = value === 'true';
    } else if (key === 'categories') {
      articleDataObject[key] = JSON.parse(value);
    } else if (key !== 'createdAt') {
      articleDataObject[key] = value;
    }
  });

  // Convert createdAt date to Firebase Timestamp
  if (dateStr) {
    const date = new Date(dateStr);
    const timestamp = Timestamp.fromDate(date);
    articleDataObject.createdAt = timestamp;  // Assign the Timestamp directly to the object
  }

  const articlesCollection = collection(db, 'blog_post');
  const docRef = await addDoc(articlesCollection, articleDataObject);

  return docRef.id;
};


const editArticle = async (articleId, updatedData, coverImage, image_file_name) => {
  try {
    const articleDoc = doc(db, 'blog_post', articleId);
    let imageUrl = coverImage;
    const imageFile = updatedData.get('image_file');
    const identifier = Date.now();

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadFile(imageFile, `blogImages/${imageFile.name}_${identifier}`);
      updatedData.delete('image_file');
      updatedData.append('image_file_name', `${imageFile.name}_${identifier}`);
    }
    updatedData.append('coverImage', imageUrl);

    // Prepare the updated data object
    const articleDataObject = {};
    updatedData.forEach((value, key) => {
      if (key === 'publish') {
        articleDataObject[key] = value === 'true';
      } else if (key === 'categories') {
        articleDataObject[key] = JSON.parse(value);
      } else if (key !== 'createdAt') {
        articleDataObject[key] = value;
      }
    });

    // Handle slug and blogURL update if title or date is changed
    const dateStr = updatedData.get('createdAt');
    const title = updatedData.get('title');

    if (dateStr || title) {
      const slug = generateSlug(dateStr, title);
      articleDataObject.slug = slug;
      const blogURL = `https://www.oneclickmed.ng/blog/${slug}?appview=true`;
      articleDataObject.blogURL = blogURL;
    }

    // Convert createdAt date to Firebase Timestamp if present
    if (dateStr) {
      const date = new Date(dateStr);
      const timestamp = Timestamp.fromDate(date);
      articleDataObject.createdAt = timestamp;  // Assign the Timestamp directly to the object
    }

    await updateDoc(articleDoc, articleDataObject);

    if (imageFile && imageFile.size > 0 && image_file_name) {
      await deleteFile(image_file_name);
    }

  } catch (error) {
    console.error('Error updating article:', error);
  }
};


const deleteArticle = async (articleId, coverImage) => {
  const articleDoc = doc(db, 'blog_post', articleId);
  await deleteDoc(articleDoc);
  if (coverImage){
    await deleteFile(coverImage);
  }
 

};

const uploadFile = async (file, path) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};

const deleteFile = async (filename) => {
  if(!filename){
    return
  }
  try {
    const path = `blogImages/${filename}`;
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

export {
  fetchAllArticles,
  filterByCategory,
  suggestArticles,
  getArticleBySlug,
  filterOptions,
  adminFilterOptions,
  AdminfetchAllArticles,
  AdminfilterByCategory,
  createArticle,
  editArticle,
  deleteArticle,
  uploadFile,
  deleteFile,
  formatDate
};
