import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
      <ul className="flex space-x-4 justify-center">
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
      <button className="bg-green-500 text-white p-2 mt-4">Donate</button>
    </footer>
  );
};

export default Footer;
