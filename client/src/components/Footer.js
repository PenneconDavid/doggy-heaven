import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Doggy Heaven. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Instagram
          </a>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Donate
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
