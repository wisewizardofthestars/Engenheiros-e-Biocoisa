import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Link from 'next/link';
import ComponenteMistério from '../components/ComponenteMistério';
import Footer from '@/components/Footer';
import AddBeachForm from '../components/AddBeach';
import IPMAData from './IPMAData';

const ProfilePage = () => {
  const backgroundImageUrl = 'https://w0.peakpx.com/wallpaper/1007/979/HD-wallpaper-video-game-genshin-impact-inazuma-genshin-impact.jpg';
  return (
    <div className='bg-custom-light-blue flex flex-col min-h-screen' style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
      <UpperMenu />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src="https://i.pinimg.com/736x/27/c1/43/27c14321fd339f564000b8819157e956.jpg"
              alt="Profile"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mt-4">Amélia Shan</h2>
          <p className="text-gray-600 text-center">Biocoisa</p>
          <div className="mt-6">
            <h3 className="text-lg font-bold">About Me</h3>
            <p className="text-gray-700">
              I wish i was at the beach right now
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul className="mt-2">
              <li className="text-gray-700">HTML</li>
              <li className="text-gray-700">CSS</li>
              <li className="text-gray-700">JavaScript</li>
              <li className="text-gray-700">React</li>
              <li className="text-gray-700">Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
