export const dynamic = 'force-dynamic';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Blog from './components/Blog';

export default async function BlogPage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${baseUrl}/api/articles`;

  let articles = [];

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      next: { revalidate:  0  }
    });

    if (!res.ok) {
      console.error('Error fetching articles:', res.statusText);
      throw new Error(`Failed to fetch articles: ${res.statusText}`);
    }

    articles = await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }

  return (
    <>
      <Header />
      <Blog articles={articles} /> 
      <Footer />
    </>
  );
}


