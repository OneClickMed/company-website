import React from 'react';
import Image from 'next/image';
import { formatDate } from '../../../../firestore';

interface Article {
  coverImage: string;
  title: string;
  createdAt: string;
}

interface BlogCardProps {
  article: Article;
  maxTitleLength?: number | null;
}

const truncateText = (text: string, maxLength: number | null): string => {
  if (!maxLength) {
    return text;
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const BlogCard: React.FC<BlogCardProps> = ({ article, maxTitleLength = null }) => {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-sm w-full text-left cursor-pointer">
      <div className="relative h-48 w-full">
        <Image
          className="object-cover rounded-t-xl h-52 w-full"
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw,50vw"
        />
      </div>
      <div className="p-4">
        <div className="uppercase tracking-wide text-md text-ocmbluedark font-semibold">
          {truncateText(article.title, maxTitleLength)}
        </div>
        <p className="mt-2 text-gray-500">{formatDate(article.createdAt)}</p>
      </div>
    </div>
  );
};

export default BlogCard;
