import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill styles
import 'tailwindcss/tailwind.css'; // Tailwind styles
import { getArticleBySlug, filterOptions, editArticle } from '../utils-firebase'; // Import necessary functions and data
import toast, { Toaster } from 'react-hot-toast';

const EditArticle = () => {
  const { slug } = useParams();
  

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submit button
  const [imagePreview, setImagePreview] = useState(null);
  const [article, setArticle] = useState({
    author: '',
    title: '',
    subtitle: '',
    image_file: null,
    image_file_name: '',
    body: '',
    content: '',
    createdAt: '',
    publish: false,
    categories: [],
    meta_description: '',
    meta_keywords: ''
  });


  useEffect(() => {
    const fetchArticle = async () => {
      if (slug) {
        try {
          const fetchedArticle = await getArticleBySlug(slug, true);
          if (fetchedArticle) {
            let formattedArticle = { ...fetchedArticle };

            const timestamp = fetchedArticle.createdAt;

            // Check if createdAt exists and is a valid Timestamp object
            if (timestamp && typeof timestamp.seconds === 'number' && typeof timestamp.nanoseconds === 'number') {
              const date = new Date(timestamp.seconds * 1000);
              const formattedDate = date.toISOString().split('T')[0];
              formattedArticle.createdAt = formattedDate;  // Update the createdAt field with formatted date
            } else {
              // Handle the case where createdAt is not a valid Timestamp
              console.warn('createdAt is not a valid Timestamp:', timestamp);
            }

            // Set the article state with all the fields from fetchedArticle
            setArticle(formattedArticle);

            // Set the image preview with the cover image URL
            setImagePreview(fetchedArticle.coverImage);
          } else {
            console.log(`Article with slug '${slug}' not found.`);
          }
        } catch (error) {
          console.error('Error fetching article:', error);
        } finally {
          setLoading(false); // Set loading to false once data is fetched
        }
      }
    };
    


    fetchArticle();
  }, [slug]);

  const validate = () => {
    const newErrors = {};
    if (!article.author) newErrors.author = 'Author is required';
    if (!article.title) newErrors.title = 'Title is required';
    if (!article.body) newErrors.body = 'Body is required';
    if (article.image_file && article.image_file.size > 5 * 1024 * 1024) {
      newErrors.image_file = 'Image size should be less than 5MB';
    }
    setErrors(newErrors);

    const valid = Object.keys(newErrors).length === 0;
    if (!valid) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-red-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-400 ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm text-red-700">
                  Missing Fields
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-red-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Close
            </button>
          </div>
        </div>
      ))
    }

    return valid
  };

  const handleChange = (field) => (event) => {
    if (field === 'image_file') {
      const file = event.target.files[0];
      setArticle({ ...article, image_file: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setArticle({ ...article, [field]: event.target.value });
    }
  };

  const handleQuillChange = (value) => {
    setArticle({ ...article, content: value });
  };

  const handleCategoryClick = (category) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      categories: [...prevArticle.categories, category],
    }));
  };

  const handleCategoryRemove = (category) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      categories: prevArticle.categories.filter((c) => c !== category),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true); 
    const formData = new FormData();
    for (const key in article) {
      if (key === 'image_file' && article[key]) {
        formData.append(key, article[key]);
      } else if (Array.isArray(article[key])) {
        formData.append(key, JSON.stringify(article[key]));
      } else {
        formData.append(key, article[key]);
      }
    }

    if (!article.createdAt) {
      formData.append('createdAt', new Date().toISOString());
    } else {
      formData.append('createdAt', article.createdAt);
    }

    try {
      const articleId = article.id;
      await editArticle(articleId, formData, article.coverImage, article.image_file_name);
      // Show success toast
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-green-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-green-400 ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className=" text-sm text-green-700">
                  Your action was completed successfully!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-green-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Close
            </button>
          </div>
        </div>
      ))
      

      
    } catch (error) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-red-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-400 ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm text-red-700">
                  Something went wrong! Please try again.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-red-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Close
            </button>
          </div>
        </div>
      ))
      

    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  const availableCategories = filterOptions 
    ? filterOptions.filter(
        (option) => !(article?.categories?.includes(option.value))
      ) 
    : [];

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-ocmblue border-t-transparent rounded-full mb-4" />
          <p className="text-lg">Loading article ...</p>
        </div>
      </div>
    );
  }
  
  if (isSubmitting) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4" />
          <p className="text-lg text-white">Saving article ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-white max-w-7xl mx-auto relative">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            position:'absolute !important'
          },
 }}
      />
      <div className='text-left'>
        <Link to="/" className="text-ocmblue mb-4 text-left ml-3 ">&larr; Back to Admin Page</Link>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white max-w-7xl mx-auto">
        <input
          type="text"
          value={article.author}
          onChange={handleChange('author')}
          placeholder="Author"
          className={`w-full p-3 border ${errors.author ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
        />
        {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}

        <input
          type="text"
          value={article.title}
          onChange={handleChange('title')}
          placeholder="Title"
          className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <input
          type="text"
          value={article.subtitle}
          onChange={handleChange('subtitle')}
          placeholder="Subtitle (optional)"
          className="w-full p-3 border border-gray-300 rounded outline-none"
        />
        <div>
          <input
            type="file"
            onChange={handleChange('image_file')}
            className={`w-full p-3 border ${errors.image_file ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
          />
          {imagePreview && (
            <div className="mt-2 ">
              <p className='text-left mb-2 text-sm text-gray-500'>Current Image. (choose a new image to update image)</p>
              <img src={imagePreview} alt="Article preview" className="w-24 h-auto" />
            </div>
          )}
          {errors.image_file && <p className="text-red-500 text-sm">{errors.image_file}</p>}
        </div>

        <Quill
          value={article.content}
          onChange={handleQuillChange}
          placeholder="Start typing your article here..."
          className={`h-full ${errors.content ? 'border-red-500' : ''}`}
        />
        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}

        <div className='w-full'>
          <h4 className="text-lg font-semibold mb-2 text-left">
            Body (Short Form preview content used in the patient app)
          </h4>
          <textarea
            value={article.body}
            onChange={handleChange('body')}
            placeholder="Body"
            rows="8"
            className={`w-full p-3 border ${errors.body ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
        </div>

        <h4 className="text-lg font-semibold text-left">Publish Date</h4>
        <input
          type="date"
          value={article.createdAt}
          required
          onChange={handleChange('createdAt')}
          className="w-full p-3 border border-gray-300 rounded outline-none"
        />

        <div className="w-full">
          <h4 className="text-lg font-semibold mb-2 text-left">Categories</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {availableCategories.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleCategoryClick(option.value)}
                className="px-4 py-2 bg-ocmblue text-white rounded"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {article?.categories?.map((category) => (
              <div
                key={category}
                className="flex items-center space-x-2 bg-blue-100 p-2 rounded">
                <span>{filterOptions.find((option) => option.value === category)?.label}</span>
                <button
                  type="button"
                  onClick={() => handleCategoryRemove(category)}
                  className="text-red-500"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold mb-2 text-left">Status</h4>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <select
                value={article.publish}
                onChange={handleChange('publish')}
                className="w-full p-3 border border-gray-300 rounded outline-none"
              >
                <option value={false}>Draft</option>
                <option value={true}>Publish</option>
              </select>
            </label>
          </div>
        </div>

        <div className='w-full'>
          <h4 className="text-lg font-semibold mb-2 text-left">Meta Description</h4>
          <input
            type="text"
            value={article.meta_description || article.description}
            onChange={handleChange('meta_description')}
            placeholder="Meta Description"
            className={`w-full p-3 border ${errors.meta_description ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
          />
          {errors.meta_description && <p className="text-red-500 text-sm">{errors.meta_description}</p>}
        </div>

        <div className='w-full'>
          <h4 className="text-lg font-semibold mb-2 text-left">Keywords</h4>
          <input
            type="text"
            value={article.meta_keywords}
            onChange={handleChange('meta_keywords')}
            placeholder="Comma Separated list of keywords from the article"
            className={`w-full p-3 border ${errors.meta_keywords ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
          />
          {errors.meta_keywords && <p className="text-red-500 text-sm">{errors.meta_keywords}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-ocmblue text-white rounded hover:bg-ocmyellow"
          disabled={isSubmitting} // Disable button when submitting
        >
          {isSubmitting ? 'Confirm Edit...' : 'Confirm Edit'} {/* Change button text based on submitting state */}
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
