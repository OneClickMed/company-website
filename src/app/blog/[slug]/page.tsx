import BlogCard from '../components/BlogCard';
import { getArticleBySlug, formatDate, suggestArticles } from '../../../../firestore';
import Link from 'next/link';
import { FiCopy } from 'react-icons/fi';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Metadata } from 'next';

interface Article {
  coverImage?: string;
  title: string;
  subtitle?: string;
  author?: string;
  createdAt: string;
  body: string;
  content: string;
  slug: string;
  url?: string;
}

interface SuggestedArticle {
  coverImage?: string;
  title: string;
  slug: string;
  createdAt?: string;
}

async function getitems(slug: string) {
  const article = await getArticleBySlug(slug);
  if (!article) {
    return notFound();
  }
  const suggestedPosts = await suggestArticles();
  return { article, suggestedPosts };
}

interface BlogDetailsProps {
  params: {
    slug: string;
  };
  searchParams: {
    appview?: string;
  };
}

// Dynamic metadata function
export async function generateMetadata({ params }: BlogDetailsProps): Promise<Metadata> {
  const { slug } = params;
  const { article } = await getitems(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.meta_description,
    keywords: article.meta_keywords,
    openGraph: {
      title: article.title,
      description: article.meta_description || article.body.slice(0, 150) + '...',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      images: [
        {
          url: article.coverImage || '/default-image.png',
          alt: article.title,
        },
      ],
    },
  };
}

export default async function BlogDetails({ params, searchParams }: BlogDetailsProps) {
  const { slug } = params;
  const { appview } = searchParams;
  const { article, suggestedPosts } = await getitems(slug);

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`;

  return (
    <>
      <Header show={appview !== 'true'} />
      <main className='max-w-5xl mx-auto relative mb-14'>
        <div id='articleBody' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left mt-10">
          <div className='text-center'>
            <h1 className="text-4xl font-bold text-ocmbluedark mb-1">{article.title}</h1>
            {article.subtitle && <h2 className="text-2xl mb-4 text-gray-700">{article.subtitle}</h2>}
            <div className='flex gap-5 mb-5 justify-center items-center flex-wrap'>
              <div className='flex justify-center items-center'>
                <Image
                  src='/icon.png'
                  alt="Description"
                  width={32}
                  height={32}
                  className="rounded-full border border-whitesmoke object-contain mr-2"
                />
                <p className="text-l text-gray-700">{article.author || "OneClick-Med Magazine"}</p>
              </div>
              <div>
                <p className="text-l text-gray-700">{formatDate(article.createdAt)}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-5">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="px-4 py-3 font-bold rounded hover:shadow-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="px-4 py-3 font-bold rounded hover:shadow-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="px-4 py-3 font-bold rounded hover:shadow-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>

              <button
                aria-label="Copy link"
                className="font-bold px-4 py-3 rounded hover:shadow-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <FiCopy size={24} />
              </button>
            </div>
          </div>
          {article.coverImage && (
            <div className='mx-auto relative md:min-h-[600px] h-[400px] w-full'>
              <Image
                className="w-full object-cover rounded-xl"
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mx-auto max-w-5xl relative">
            <div className="col-span-4">
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: article.content || article.body }} />
  
            <div className='relative'>
            {suggestedPosts.length > 1 &&  appview !== 'true'  && <div className="flex flex-no-wrap overflow-x-scroll  items-start my-8 gap-4 py-8 border-t border-whitesmoke hide-scrollbar relative">
                {suggestedPosts.map((suggestedArticle, index) => (
                  <div key={index} className="min-w-72">
                    <Link href={`/blog/${suggestedArticle.slug}`}>
                      <BlogCard article={suggestedArticle} maxTitleLength={25} />
                      <span className="sr-only">Article about {suggestedArticle.title}</span>
                    </Link>
                  </div>
                ))}
              </div>}
            </div>
          
            </div>
          </div>
        </div>
      </main>
      <Footer show={appview !== 'true'} />
    </>
  );
}
