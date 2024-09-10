import { db, collection, getDocs, query, where, doc, limit } from './firebase-config';

const filterOptions = [
  { value: "all", label: "All" },
  { value: "emr", label: "Emergency" },
  { value: "htp", label: "Health Tips" },
  { value: "med", label: "Medicine" },
  { value: "nut", label: "Nutrition" },
  { value: "fit", label: "Fitness" },
  { value: "men", label: "Mental Health" },
];


function formatDate(dateInput: any): string {
  try {
    let date: Date;

    // Check if the input is a Firestore Timestamp
    if (dateInput instanceof Date) {
      date = dateInput;
    } else if (dateInput.seconds) {
      // Firestore Timestamp
      date = new Date(dateInput.seconds * 1000);
    } else if (typeof dateInput === 'string') {
      // If it's a string, try to parse it as a date string
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

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date conversion');
    }

    // Format the date as desired
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);

  } catch (error) {
    //console.error('Error in formatDate function:', error.message);
    return 'Invalid date';
  }
}


const adminFilterOptions = [
  { value: "all", label: "All" },
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
];

const fetchAllArticles = async (): Promise<any[]> => {
  try {
    const articlesCollection = collection(db, 'blog_post');
    const q = query(articlesCollection, where('publish', '==', true));
    const articlesSnapshot = await getDocs(q);
    const data = articlesSnapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

const filterByCategory = async (category: string): Promise<any[]> => {
  try {
    const articlesCollection = collection(db, 'blog_post');
    let q;
    if (category === 'all') {
      q = query(articlesCollection, where('publish', '==', true));
    } else {
      q = query(articlesCollection, where('publish', '==', true), where('categories', 'array-contains', category));
    }
    const articlesSnapshot = await getDocs(q);
    return articlesSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error(`Error filtering articles by category "${category}":`, error);
    return [];
  }
};

const suggestArticles = async (): Promise<any[]> => {
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

const getArticleBySlug = async (slug: string): Promise<any | null> => {
  try {
    const articlesCollection = collection(db, 'blog_post');
    const q = query(articlesCollection, where('slug', '==', slug), where('publish', '==', true));
    const articlesSnapshot = await getDocs(q);

    if (!articlesSnapshot.empty) {
      const data = articlesSnapshot.docs[0].data();
      return data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}":`, error);
    return null;
  }
};

export {
  fetchAllArticles,
  filterByCategory,
  suggestArticles,
  getArticleBySlug,
  filterOptions,
  adminFilterOptions,
  formatDate
};
