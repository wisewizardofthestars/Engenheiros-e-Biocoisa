import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Footer from '../components/Footer';
import ComponenteMistério from '../components/ComponenteMistério';
import BeachCharacteristics from '../components/BeachCharacteristics ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrellaBeach,
  faFlag,
  faWater,
  faLifeRing,
  faToiletPaper,
  faShower,
  faTrash,
  faBroom,
  faMedkit,
  faParking
} from '@fortawesome/free-solid-svg-icons';

const beachCharacteristics = [
  { name: "Coastal beach", icon: faUmbrellaBeach },
  { name: "Blue Flag", icon: faFlag },
  { name: "Waves of special interest", icon: faWater },
  { name: "Lifeguard", icon: faLifeRing },
  { name: "Sanitary facilities", icon: faToiletPaper },
  { name: "Shower", icon: faShower },
  { name: "Waste collection", icon: faTrash },
  { name: "Beach cleaning", icon: faBroom },
  { name: "First aid station", icon: faMedkit },
  { name: "Parking", icon: faParking },
];


const TestPage = () => {
  
  return (
    <div>
    <UpperMenu />

    <div className="bg-gradient-to-b from-custom-pale-blue to-custom-yellow min-h-screen">
      <header className="py-0">
      <div className="h-80 bg-cover bg-center bg-no-repeat bg-slate-200 py-20 px-6 text-center text-white" 
          style={{ backgroundImage: "url('https://media.timeout.com/images/105265120/image.jpg')"
          }}>
        <div className="container mx-4  text-center">
          <h1 className="text-5xl text-white font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia do CDS
          </h1>
          <p className="text-white text-xl mt-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Costa da Caparica</p>
        </div>
      </div>
      </header>
    

        <main className="container mx-auto px-4 py-8">
          <section className="text-center">
            <h2 className="text-3xl text-custom-dark-gray font-bold mb-8"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>Conditions Today</h2>
            <a href="/location" className="mx-4 shadow-lg text-black bg-custom-blue-green py-3 px-6 rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
              Go Back
            </a>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-custom-blue-green font-bold mb-4">Weather today</h3>
                <p className="text-gray-700">
                  Something something today very hot, UV will kill you etc ect
                </p>
                <div className="flex items-center justify-center">
       <img
          src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png"
        alt="Description of the image"
        className="mt-4 mx-4 w-24 h-24 rounded-full object-cover"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5016/5016767.png"
          alt="Description of the image"
          className="mt-4 w-24 h-24 rounded-full object-cover"
        />
          </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-custom-blue-green font-bold mb-4">Ondas and stuff</h3>
                <p className="text-gray-700">
                  Hoje ondas vão estar até blah blah metros, muito aconselhado para surf
                </p>
                <div className="flex items-center justify-center">
              <img
                src="https://www.freepnglogos.com/uploads/sea-png/sea-water-wave-drip-image-pixabay-40.png"
                alt="Description of the image"
                className="mt-4 mx-4 w-24 h-24 rounded-full object-cover"
              />
              <img
                src="https://static.thenounproject.com/png/81143-200.png"
                alt="Description of the image"
                className="mt-4 w-24 h-24 rounded-full object-cover"
              />
            </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-custom-blue-green font-bold mb-4">Ask for you</h3>
                <ComponenteMistério />
              </div>
            </div>
          </section>
          <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl text-custom-blue-green text-center font-bold mb-4 p-">Characteristics</h2>
            <BeachCharacteristics characteristics={beachCharacteristics} />
          </section>

          <h2 className="text-2xl text-custom-dark-gray text-center font-bold mb-4 mt-8">Popular Attractions</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg flex hover:shadow hover:transform hover:scale-105 transition duration-300">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOo9dYYXQSQ_KToOfwmLCr9f544uVesO2bOeLgY=s1360-w1360-h1020"
                alt="Restaurant"
                className="w-1/2 rounded-lg object-cover flex-shrink-0"
              />
              <div className="ml-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">Café do Mar</h2>
                <p className="text-gray-700 mb-4">Muralha da Praia - Apoio 10 Praia CDS- Costa da Caparica</p>
                <p className="text-gray-700">5 € - 16 €</p>
                <p className="text-gray-700">Gastronomy: Europeia, Portuguesa</p>
                <p className="text-gray-700">Meals: Pequeno-almoço, Almoço, Jantar, Bebidas</p>
              </div>
            </div>
          </div>
        </main>
    </div>
    <Footer />
    </div>
  );
};

export default TestPage;
