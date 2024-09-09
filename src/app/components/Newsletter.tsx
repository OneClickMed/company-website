import React from 'react';

const Newsletter = ({position ='center'}) => {
  return (
    <div className={`footer-newsletter bg-ocmbluelightshade py-8 text-${position}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col items-${position} justify-center`}>
          <h4 className="text-2xl font-semibold mb-2 px-4">Our Newsletter</h4>
          <p className="mb-4 px-4">Get notified when there&apos;s something new</p>
          <div className="w-full max-w-lg">
            <form className="flex w-full md:w-auto">
              <div className="flex flex-grow border border-gray-300 rounded-md overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-gray-900 p-2 border-none focus:outline-none"
                />
                <button type="submit" className="bg-ocmblue  p-2 hover:bg-ocmyellow">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
