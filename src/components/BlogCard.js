import React from 'react';
import { formatDate } from '../utils-firebase';
const truncateText = (text, maxLength) => {
  if(!maxLength){
    return text
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};
const BlogCard = ({ article,maxTitleLength=null }) => {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-sm overflow-hidden  m-5 text-left cursor-pointer">
      <img className="h-48 w-full object-cover" src={article.coverImage} alt={article.title} />
      <div className="p-6">
        <div className="uppercase tracking-wide text-md text-ocmbluedark font-semibold">
        {truncateText(article.title, maxTitleLength )}
        </div>
        <p className="mt-2 text-gray-500">{formatDate(article.createdAt)}</p>
      </div>
    </div>
  );
};

export default BlogCard;
