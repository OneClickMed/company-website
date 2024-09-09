'use client';

import React, { useState } from 'react';
import BlogCard from './BlogCard';
import Link from 'next/link';
import Image from 'next/image';
import SearchSection from './SearchSection';
import FilterSection from './FilterSection';
import { filterOptions, filterByCategory } from '../../../../firestore';

interface Article {
  coverImage: string;
  title: string;
  createdAt: string;
  body: string;
  slug: string;
}

interface BlogProps {
  articles: Article[];
}

const Blog: React.FC<BlogProps> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [showFeatured, setShowFeatured] = useState(true);
  const [filterStatus, setFilterStatus] = useState('idle')

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredArticles(articles);
    } else {
      setFilterStatus('loading')
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
      setFilterStatus('idle')
    }
  };

  const handleCategoryChange = async (category: string) => {
    setFilterStatus('loading')
    const filtered = await filterByCategory(category);
    setFilteredArticles(filtered);
    setShowFeatured(false);
    setFilterStatus('idle')
  };

  const getAllArticles = () => {
    setFilteredArticles(articles);
  };
 

  return (
    <main className='min-h-screen max-w-7xl mx-auto relative'>
      <div className='bg-white z-10 sticky top-0'>
        <SearchSection search={handleSearch} />
        <FilterSection getAll={getAllArticles} filterOptions={filterOptions} onCategoryChange={handleCategoryChange} filterStatus={filterStatus}  />
      </div>

      {filteredArticles.length > 0 ? (
        <>
          {showFeatured && (
            <div>
              <div className="flex flex-wrap justify-between mx-auto px-5 my-8">
                <div className="w-full lg:w-1/2">
                  <Image
                    className="h-45 w-full object-cover rounded-xl"
                    src={filteredArticles[0].coverImage}
                    alt={filteredArticles[0].title}
                    width={800}
                    height={450}
                    priority
                  />
                </div>
                <div className="w-full lg:w-1/2  py-4 md:p-4  text-left flex items-center">
                  <div>
                    <h4 className="text-ocmblue font-bold mb-2">Today Featured Post</h4>
                    <h2 className="text-2xl font-bold text-ocmbluedark">{filteredArticles[0].title}</h2>
                    <div className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: filteredArticles[0].body.substring(0, 300) }}></div>
                    <Link href={`/blog/${filteredArticles[0].slug}`}>
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
       {filteredArticles.length > 0 &&   <div className="flex flex-wrap mx-auto">
            {filteredArticles.map((article, index) => (
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={index}>
                <Link href={`/blog/${article.slug}`}>
                  <BlogCard article={article} />
                  <span className="sr-only">Article about {article.title}</span>
                </Link>
              </div>
            ))}
          </div>}
        </>
      ) : (
        <div className="flex justify-center items-center h-full py-20">
          {filterStatus !== 'loading' &&  <p className="text-xl text-gray-500">No items found</p>}
         {filterStatus === 'loading' && <p className="text-xl text-gray-500"> Loading ...</p>}
        </div>
      )}
    </main>
  );
};

export default Blog;
