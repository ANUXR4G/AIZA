import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-BgColor">
      
        <div className="text-center">
          <h1 className="text-4xl text-SecondTextColor font-bold mb-4">404</h1>
          <p className="text-xl mb-4 text-TextColor">Page Not Found</p>
          <Link href="/" className="text-MainColor underline">
            Go Back to Home
          </Link>
        </div>
      </div>
    );
};

export default NotFoundPage;