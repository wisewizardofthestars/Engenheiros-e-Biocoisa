import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomComponent from './ComSara';

const specificParts = [
  'Praia da Cova do Vapor',
  'Praia de São João',
  'Praia do Rei',
  'Praia do CDS',
  'Praia da Saúde',
  'Praia da Rainha',
  'Praia do Castelo',
  'Praia da Morena',
  'Praia da Sereia',
  'Praia da Nova Vaga',
  'Praia da Bela Vista',
  'Praia da Ribeira de Cascais',
  'Praia da Arriba',
  'Praia da Adiça',
  'Praia da Fonte da Telha',
  'Praia da Lagoa de Albufeira',
  'Praia de Melides',
  'Praia de Porto Covo',
  'Praia de Santo André',
  'Praia de São Torpes',
  'Praia de Sesimbra',
  'Praia de Troia',
  'Praia do Infante',
  'Praia das Bicas',
  'Praia da Tartaruga',
  'Praia do Meco',
  'Praia do Ouro',
  'Praia do Morgável',
  'Fonte da Telha',
];

function ComponenteMistério() {
  const [responseMessage, setResponseMessage] = useState(null);
  const [highlightedParts, setHighlightedParts] = useState([]);

  async function sendMessage(message) {
    const requestBody = {
      messages: [
        { role: 'system', content: 'You' },
        { role: 'user', content: message },
        {
          role: 'user',
          content:
            'Hello, please respond to the questions for me to find the best beach at Costa da Caparica for me to go to. Be specific and answer not with a generic answer, respond with certainty. Dont make questions, just answer with a beach even if not sure. And dont say sure id be happy to help or anything similar, answer already. ',
        },
      ],
      model: 'gpt-3.5-turbo', // Specify the model here
    };

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
          },
        }
      );

      // Handle the response here (e.g., update state, display the response message)
      const reply = response.data.choices[0].message.content;
      setResponseMessage(reply);
      console.log('Reply:', reply);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  

  function handleSubmit(event) {
    event.preventDefault();
    const message = event.target.elements.message.value;
    sendMessage(message);
  }

  const makeBold = (message) => {
    const regex = new RegExp(`(${specificParts.join('|')})`, 'gi');
    const matches = message.match(regex);
  
    // Replace the matched parts with the bolded version using Tailwind CSS
    const boldedMessage = message.replace(regex, '<span class="font-bold">$1</span>');
  
    return { boldedMessage, matches };
  };
  
  useEffect(() => {
    if (responseMessage) {
      // Extract and set the highlighted parts
      const { boldedMessage, matches } = makeBold(responseMessage);
      setHighlightedParts(matches || []);
      setResponseMessage(boldedMessage);
    }
  }, [responseMessage]);

  return (
    <div className="p-4">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className="block w-full px-4 py-2 text-grey-400 bg-white border rounded-full focus:border-grey-400 focus:ring-grey-300 focus:outline-none focus           :ring-opacity-40"
          placeholder="Search..."
        />
        <button className="px-4 text-white bg-custom-blue-green rounded-full ml-3.5 hover:shadow hover:transform hover:scale-105 hover:bg-yellow-200 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <div className="text-s rounded-lg text-justify mb-16 my-4 ">
      <br />
      {responseMessage && (
        <div className="" dangerouslySetInnerHTML={{ __html: responseMessage }} />
      )}
      {highlightedParts.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Find out more:</h3>
          <ul className="list-disc list-inside">
            {highlightedParts.map((part, index) => (
              <CustomComponent key={index} part={part} />
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

export default ComponenteMistério;


