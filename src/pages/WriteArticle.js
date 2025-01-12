import React, { useState } from 'react';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'tailwindcss/tailwind.css';
import { filterOptions, createArticle } from '../utils-firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Timestamp } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

const WriteArticle = () => {
  const [article, setArticle] = useState({
    author: 'OneClick-Med Magazine',
    title: '',
    subtitle: '',
    image: null,
    body: '',
    content: '',
    createdAt: '',
    publish: false,
    featured: false,
    categories: [],
    meta_description: '',
    meta_keywords: ''
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!article.author) newErrors.author = 'Author is required';
    if (!article.createdAt) newErrors.author = 'Date is required';
    if (!article.title) newErrors.title = 'Title is required';
    if (!article.body) newErrors.body = 'Body is required';
    if (!article.content) newErrors.content = 'Content is required';
    if (article.image && article.image.size > 5 * 1024 * 1024) {
      newErrors.image = 'Image size should be less than 5MB';
    }
    setErrors(newErrors);

    const valid = Object.keys(newErrors).length === 0;

    if (!valid) {
      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-red-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-400 ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm text-red-700">Missing Fields</p>
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
      ));
    }

    return valid;
  };

  const handleChange = (field) => (event) => {
    if (field === 'image') {
      setArticle({ ...article, image: event.target.files[0] });
    } else if (field === 'publish' || field === 'featured') {
      setArticle({ ...article, [field]: event.target.value === 'true' });
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
      if (key === 'image' && article[key]) {
        formData.append(key, article[key]);
      } else if (Array.isArray(article[key])) {
        formData.append(key, JSON.stringify(article[key]));
      } else {
        formData.append(key, article[key]);
      }
    }

    if (!article.createdAt) {
      formData.append('createdAt', Timestamp.now());
    } else {
      formData.append('createdAt', article.createdAt);
    }

    try {
      await createArticle(formData);
      setStatus('Article Created successfully');
      setArticle({
        author: 'OneClick-Med Magazine',
        title: '',
        subtitle: '',
        image: null,
        body: '',
        content: '',
        createdAt: '',
        publish: false,
        featured: false,
        categories: [],
        meta_description: '',
        meta_keywords: ''
      });
      navigate('/');
    } catch (error) {
      console.error('Error creating article:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableCategories = filterOptions.filter(
    (option) => !article.categories.includes(option.value)
  );

  return (
    <div className="space-y-6 p-6 bg-white max-w-7xl mx-auto">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            position: 'absolute !important'
          },
        }}
      />
      <div className='text-left'>
        <Link to="/" className="text-ocmblue mb-4 text-left ml-3">&larr; Back to Admin Page</Link>
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

        <input
          type="file"
          onChange={handleChange('image')}
          className={`w-full p-3 border ${errors.image ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-2 text-left">Publish Status</h4>
            <select
              value={article.publish.toString()}
              onChange={handleChange('publish')}
              className="w-full p-3 border border-gray-300 rounded outline-none"
            >
              <option value="false">Draft</option>
              <option value="true">Published</option>
            </select>
          </div>

          <div className="w-full">
            <h4 className="text-lg font-semibold mb-2 text-left">Featured Post</h4>
            <select
              value={article.featured.toString()}
              onChange={handleChange('featured')}
              className="w-full p-3 border border-gray-300 rounded outline-none"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-left">Publish Date</h4>
          <input
            type="date"
            value={article.createdAt}
            onChange={handleChange('createdAt')}
            className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded outline-none`}
          />
        </div>

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
            {article.categories.map((category) => (
              <div
                key={category}
                className="flex items-center space-x-2 bg-blue-100 p-2 rounded">
                <span>{filterOptions.find((option) => option.value === category).label}</span>
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

        <div className='w-full'>
          <h4 className="text-lg font-semibold mb-2 text-left">Meta Description</h4>
          <input
            type="text"
            value={article.meta_description}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Article...' : 'Create Article'}
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default WriteArticle;