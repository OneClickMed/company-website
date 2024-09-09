import Link from 'next/link'
import Header from './components/Header';
const NotFound = () => {
  return (
    <div>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-[65vh] bg-white text-black px-4">
      <h1 className="text-6xl font-bold mb-4 text-ocmblue">404</h1>
      <p className="text-2xl">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-ocmblue underline">Return Home</Link>

    </div>
    </div>
  );
};

export default NotFound;





 
