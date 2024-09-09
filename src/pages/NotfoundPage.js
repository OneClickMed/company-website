// src/pages/NotFoundPage.js
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[55vh] bg-white text-black px-4">
      <h1 className="text-6xl font-bold mb-4 text-ocmblue">404</h1>
      <p className="text-2xl">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-ocmblue underline">Go back to Home</a>
    </div>
  );
};

export default NotFoundPage;
