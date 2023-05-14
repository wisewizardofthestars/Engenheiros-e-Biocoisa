import Link from 'next/link';
import React from 'react';
import UpperMenu from '../components/UpperMenu';
import ComponenteMistério from '../components/ComponenteMistério';

const Footer = () => {
  return (
    <footer className="bg-white w-full rounded-sm shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:p-4 md:py-3">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-2 sm:mb-0">
            <img src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png" className="h-6 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BeachFinder</span>
          </a>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="mr-2 hover:underline md:mr-4">About</a>
            </li>
            <li>
              <a href="privacy_policy.html" className="mr-2 hover:underline md:mr-4">Privacy Policy</a>
            </li>
            <li>
              <a href="licensing.html" className="mr-2 hover:underline md:mr-4">Licensing</a>
            </li>
            <li>
              <a href="contact.html" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-xs text-gray-500 sm:text-sm sm:text-center dark:text-gray-400">© 2023 BeachFinder. Made with ❤️ by Os Engenheiros e a Biocoisa.</span>
      </div>
    </footer>
  );
};

export default Footer;
