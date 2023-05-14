import React from 'react';
import Link from 'next/link';

const UpperMenu = () => {
  return (
    <nav className="flex justify-between items-center bg-custom-blue-green py-4 px-6 shadow-md">
        <div>
            <Link href="/" className="text-3xl font-bold text-black">BeachFinder</Link>
        </div>
        <div>
        <ul className="flex space-x-6 font-bold  text-white-600">
  <li>
    <Link href="/" className="hover:bg-custom-deep-blue hover:text-white px-4 py-2 rounded transition duration-300">Home</Link>
  </li>
  <li>
    <Link href="/location" className="hover:bg-custom-deep-blue hover:text-white px-4 py-2 rounded transition duration-300">Location</Link>
  </li>
  <li>
    <Link href="/events" className="hover:bg-custom-deep-blue hover:text-white px-4 py-2 rounded transition duration-300">Events</Link>
  </li>
  <li>
    <Link href="/about" className="hover:bg-custom-deep-blue hover:text-white px-4 py-2 rounded transition duration-300">About</Link>
  </li>
  <li>
    <Link href="/profile" className="hover:bg-custom-deep-blue hover:text-white px-4 py-2 rounded transition duration-300">Profile</Link>
  </li>
</ul>

        </div>
    </nav>
  );
};

export default UpperMenu;
