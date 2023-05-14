import { useState } from 'react';
import React from 'react';

const AddBeachForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    imageUrl: '',
    apiURL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addBeach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Reset the form after successful submission
        setFormData({
          name: '',
          location: '',
          description: '',
          imageUrl: '',
          apiURL: ''
        });
        console.log('Beach added successfully');
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add Beach</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter beach name"
            className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter beach description"
            className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter beach location"
            className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter beach image URL"
            className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apiURL" className="block text-sm font-medium text-gray-700">
            API URL
          </label>
          <input

            type="text"
            name="apiURL"
            id="apiURL"
            value={formData.apiURL}
            onChange={handleChange}
            placeholder="Enter beach API URL"
            className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Repeat the above input pattern for other fields: location, description, imageUrl, apiURL */}
        <button
          type="submit"
          className="bg-custom-blue-green rounded-xl hover:bg-custom-deep-blue text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default AddBeachForm;
