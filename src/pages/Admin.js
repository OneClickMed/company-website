import React, { useState, useEffect } from 'react';
import FilterSection from '../components/FilterSection';
import BlogCard from '../components/BlogCard';
import ConfirmationModal from '../components/ConfirmationModal';
import {
  AdminfetchAllArticles,
  AdminfilterByCategory,
  adminFilterOptions,
  deleteArticle 
} from '../utils-firebase'; 
import { Link } from 'react-router-dom';
import { FiPlus, FiTrash } from 'react-icons/fi';

const Admin = () => {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [articleIdToDelete, setArticleIdToDelete] = useState({});

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      const allArticles = await AdminfetchAllArticles();
      setFilteredArticles(allArticles);
      setLoading(false);
      window.scrollTo(0, 0);
    };

    loadArticles();
  }, []);

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    const filtered = await AdminfilterByCategory(category);
    setFilteredArticles(filtered);
    setLoading(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteArticle(articleIdToDelete.id,articleIdToDelete.filename); 
    // Reload articles after deletion
    const allArticles = await AdminfetchAllArticles();
    setFilteredArticles(allArticles);
    setLoading(false);
    // Close the confirmation modal after deletion
    setShowConfirmationModal(false);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto relative">
      <FilterSection
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        filterOptions={adminFilterOptions}
      />
      <div className="flex flex-wrap mx-auto px-5">
        {loading ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="text-center">
              <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-4" />
              <p className="text-lg text-white">Loading articles...</p>
            </div>
          </div>
        ) : (
          filteredArticles.map((article, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2"  key={index}>
              <Link to={`/edit/${article.slug}`}>
                <BlogCard article={article} />
                <span className="sr-only">Article about {article.title}</span>
              </Link>
              <button
                onClick={() => {
                  setArticleIdToDelete({ 'id':article.id,'filename':article.image_file_name});
                  setShowConfirmationModal(true);
                }}
                className=" text-gray hover:text-red-700  ml-6  flex items-center justify-start"
              >
                <FiTrash className="mr-1" />
                Delete
              </button>

            </div>
          ))
        )}
        {filteredArticles.length === 0 && !loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-xl">No articles found.</p>
          </div>
        )}
      </div>
      <Link
        to="/write"
        className="fixed bottom-10 right-10 bg-ocmblue text-white p-4 rounded-full shadow-lg hover:bg-ocmyellow"
        aria-label="Add New Article"
      >
        <FiPlus size={24} />
      </Link>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onCancel={() => setShowConfirmationModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Admin;
