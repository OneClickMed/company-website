import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { useParams } from 'react-router-dom';
import { getArticleBySlug, formatDate,suggestArticles } from '../utils-firebase';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';
import '../index.css';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [suggestedPosts, setSuggestedPosts] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      if (slug) {
        const fetchedArticle = await getArticleBySlug(slug);
        console.log('Fetched Article:', fetchedArticle); // Add this line for debugging
        setArticle(fetchedArticle);

        const suggestions =  await suggestArticles(); 
        setSuggestedPosts(suggestions);

      }
    };

    fetchArticle();

    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <div>No article found .</div>;
  }

  const url = window.location.href;

  return (
    <div id='articleBody' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left mt-10">
      <div className='text-center'>
        <h1 className="text-4xl font-bold text-ocmbluedark mb-1">{article.title}</h1>
        <h2 className="text-2xl mb-4 text-gray-700">{article.subtitle}</h2>
        <div className='flex gap-5 mb-5 justify-center items-center'>
          <div className='flex justify-center items-center'>
            <img
              src='/favicon.png'
              alt="Description"
              className="w-8 h-8 rounded-full  border border-whitesmoke object-cover mr-2"
            />
            <p className="text-l text-gray-700">{article.author}</p>
          </div>
          <div>
            <p className="text-l text-gray-700">{formatDate(article.date)}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mb-5">
          <FacebookShareButton url={url} quote={article.title}>
            <button
              aria-label="Share on Facebook"
              className="px-4 py-3 font-bold rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </button>
          </FacebookShareButton>

          <TwitterShareButton url={url} title={article.title}>
            <button
              aria-label="Share on Twitter"
              className="px-4 py-3 font-bold rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </button>
          </TwitterShareButton>

          <LinkedinShareButton url={article.url}>
            <button
              aria-label="Share on LinkedIn"
              className="px-4 py-3 font-bold rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </button>
          </LinkedinShareButton>

          <CopyToClipboard text={url}>
            <button
              aria-label="Copy link"
              className="font-bold px-4 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <FiCopy size={24} />
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className='mx-auto'>
      <img
        className="w-full max-w-5xl mx-auto object-cover rounded-xl"
        src={article.coverImage}
        alt={article.title}
      />
    </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mx-auto max-w-5xl">
        <div className="col-span-4">
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: article.body }} />
          <div>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>
              Duis autem vel eum iriure dolor <a href="https://www.linkedin.com/company/oneclick-med/posts/?feedView=all" target="_blank" rel="noreferrer">Visit Our Linkedin page</a> in hendrerit in vulputate velit esse molestie consequat...
            </p>
          </div>
          <div className="flex flex-nowrap overflow-x-scroll py-2 scrolling-wrapper hide-scrollbar gap-2">
            {suggestedPosts.map((suggestedArticle, index) => (
              <div key={index} className="min-w-48">
                <Link to={`/blog/${suggestedArticle.slug}`}>
                  <BlogCard article={suggestedArticle} maxTitleLength={25} />
                  <span className="sr-only">Article about {suggestedArticle.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
