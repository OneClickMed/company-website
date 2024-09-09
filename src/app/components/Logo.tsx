import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image 
        src="/assets/img/onclickmedlogo.png" 
        alt="OneClick-med Logo" 
        className="cursor-pointer"
        height={90} // Default height for larger screens
        width={150} // Default width for larger screens
        priority      
      />
    </Link>
  );
};

export default Logo;

