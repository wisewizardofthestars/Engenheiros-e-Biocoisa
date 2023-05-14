import React, { useState, useEffect } from "react";
import UpperMenu from "../components/UpperMenu";
import Footer from "../components/Footer";
import axios from "axios";
import CustomComponent from "@/components/ComSara";

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

const Surf = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState(null);
  const [highlightedParts, setHighlightedParts] = useState(specificParts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json'
        );

        if (response.status === 200) {
          const filteredData = response.data.data.find(
            (item) => item.globalIdLocal === 1151200
          );
          setData(filteredData);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  async function sendMessage() {
    try {
      const ipmaResponse = await axios.get(
        'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json'
      );
  
      if (ipmaResponse.status === 200) {
        const filteredData = ipmaResponse.data.data.find(
          (item) => item.globalIdLocal === 1151200
        );

        const precipitaProb = filteredData && filteredData.precipitaProb;
  const tMin = filteredData && filteredData.tMin;
const tMax = filteredData && filteredData.tMax;
const predWindDir = filteredData && filteredData.predWindDir;
const idWeatherType = filteredData && filteredData.idWeatherType;
const classWindSpeed = filteredData && filteredData.classWindSpeed;
const longitude = filteredData && filteredData.longitude;
const forecastDate = filteredData && filteredData.forecastDate;
const latitude = filteredData && filteredData.latitude;
  
const dataToSend = {
  precipitaProb: filteredData && filteredData.precipitaProb,
  tMin: filteredData && filteredData.tMin,
  tMax: filteredData && filteredData.tMax,
  predWindDir: filteredData && filteredData.predWindDir,
  idWeatherType: filteredData && filteredData.idWeatherType,
  classWindSpeed: filteredData && filteredData.classWindSpeed,
  longitude: filteredData && filteredData.longitude,
  forecastDate: filteredData && filteredData.forecastDate,
  latitude: filteredData && filteredData.latitude,
};
        const userInputMessage = 'Hello, please give me specific answer to 5 of the best beaches in Costa da Caparica to surf. Be certain, don\'t ask questions, and answer even if not sure. Don\'t say "I\'d be happy to help" or anything similar. Answer already and only mention 5 beaches. I will send you some info about the weather today at costa da caparica, to complement you answer. ';
  
        const requestBody = {
          messages: [
            { role: 'system', content: 'You' },
            {
              role: 'user',
              content: userInputMessage,
            },
            {
              role: 'system',
              content: dataToSend,
            },
          ],
          model: 'gpt-3.5-turbo', // Specify the model here
        };
  
        const openaiResponse = await axios.post(
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
        const reply = openaiResponse.data.choices[0].message.content;
        setResponseMessage(reply);
        console.log('Reply:', reply);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
      return (
        <div className="bg-gradient-to-b from-custom-pale-blue to-custom-yellow  min-h-screen">
          <UpperMenu />
          <div className="bg-costum-light-blue p-4 flex-grow">
            <section className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold mb-4">Best waves in Caparica today</h2>
              <p className="text-gray-700 mb-4">
                Here you can find a list of the beaches that are best for surfing.
              </p>
              <div className="flex justify-start">
                <a
                  href="/location"
                  className="mr-4 shadow-lg text-black bg-custom-blue-green py-1.5 px-4 rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out"
                >
                  Go Back
                </a>
              </div>
            </section>
            <div className="py-8">
              <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {highlightedParts.map((part, index) => (
                    <CustomComponent key={index} part={part} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    };
 
    export default Surf;      
