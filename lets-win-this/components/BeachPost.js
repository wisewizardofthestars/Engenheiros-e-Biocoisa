import React, { useState } from 'react';

const BeachPost = ({ title, imageSrc, icon, description }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow hover:transform hover:scale-105 transition duration-300">
      <i className={icon + " text-indigo-500 text-4xl mb-4"}></i>
      <div>
        <img src={imageSrc} alt="Image" className="flex rounded-xl" />
        <h3 className="text-xl font-bold mb-4 mt-4">{title}</h3>
        {showFullContent ? (
          <p className="text-justify text-gray-600">{description}</p>
        ) : (
          <p className="text-justify text-gray-600">{description.substr(0, 200)}...</p>
        )}
        {description.length > 100 && (
          <button
            onClick={handleReadMoreClick}
            className="text-custom-dark-gray hover:text-blue-300 font-bold mt-2"
          >
            {showFullContent ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BeachPost;
