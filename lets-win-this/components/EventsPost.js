import React, { useState } from 'react';

const EventsPost = ({ title, description, backgroundImage }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="p-4 bg-blue-200 rounded-lg relative">
      <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
      {showFullContent ? (
        <p className="text-justify text-white">{description}</p>
      ) : (
        <p className="text-justify text-white">{description.substr(0, 100)}...</p>
      )}
      {description.length > 100 && (
        <button
          onClick={handleReadMoreClick}
          className="absolute bottom-4 right-4 text-sm text-blue-200 hover:text-blue-300 font-bold"
        >
          {showFullContent ? 'Read Less' : 'Read More'}
        </button>
      )}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage }}
      >
      </div>
    </div>
  );
};

export default EventsPost;
