import React, { useState, useEffect } from 'react';
import FilterSection from '../components/FilterSection';
import SearchSection from '../components/SearchSection';
import BlogCard from '../components/BlogCard';
import {
  fetchAllArticles,
  filterByCategory,
  filterOptions
} from '../utils-firebase';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  //const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showfeatured, setShowFeatured] = useState(true)
  //const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadArticles = async () => {
     // setLoading(true);
      const allArticles = await fetchAllArticles();
      setFilteredArticles(allArticles);
      // setLoading(false);
      window.scrollTo(0, 0);
    };
    
    loadArticles();
  }, []);



  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    //setLoading(true); 
    const filtered = await filterByCategory(category);
    setFilteredArticles(filtered);
    // setLoading(false); // Optional: Hide the loading indicator
    setShowFeatured(false);
  };
  

  return (
    <div className=" max-w-7xl mx-auto">
      <SearchSection />
      {filteredArticles.length > 0 && showfeatured && (
        <div >
          <div className="flex flex-wrap justify-between mx-auto px-5 my-8">
            <div className="w-full lg:w-1/2">
              <img className="h-45 w-full object-cover rounded-xl" src={filteredArticles[0].coverImage} alt={filteredArticles[0].title} />
            </div>
            <div className="w-full lg:w-1/2 p-4 text-left flex items-center">
              <div>
                <h4 className="text-ocmblue font-bold mb-2"> Today Featured Post</h4>
                <h2 className="text-2xl font-bold text-ocmbluedark">{filteredArticles[0].title}</h2>
                <p className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: filteredArticles[0].body.substring(0, 300) }}></p>
                <Link to={`/blog/${filteredArticles[0].slug}`}>
                <button className="mt-4 bg-ocmblue hover:bg-ocmyellow text-white py-2 px-4 rounded">
                  Read More
                  <span className="sr-only">Article about {filteredArticles[0].title}</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <FilterSection selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} filterOptions={filterOptions} />
      <div className="flex flex-wrap  mx-auto px-5 " >
        {filteredArticles.map((article, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={index}>
            <Link to={`/blog/${article.slug}`}>
              <BlogCard article={article} />
              <span className="sr-only">Article about {article.title}</span>
            </Link>
          </div>
        ))}
        {filteredArticles.length === 0 && (
          <div className=" ">
            <p className='text-xl p-6 text-center' >No articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
