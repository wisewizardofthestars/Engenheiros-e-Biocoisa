import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Footer from '../components/Footer';
import ComponenteMistério from '../components/ComponenteMistério';
import BeachCharacteristics from '../components/BeachCharacteristics ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faWater, faToiletPaper, faTrash, faBroom, faParking } from '@fortawesome/free-solid-svg-icons';
import IPMAData from './IPMAData';

const beachCharacteristics = [
  { name: "Coastal beach", icon: faUmbrellaBeach },
  { name: "Waves of special interest", icon: faWater },
  { name: "Sanitary facilities", icon: faToiletPaper },
  { name: "Waste collection", icon: faTrash },
  { name: "Beach cleaning", icon: faBroom },
  { name: "Parking", icon: faParking },
];

const TestPage = () => {
  
  return (
    <div>
    <UpperMenu />

    <div className="bgcustom-yellow min-h-screen">
      <header className="py-0">
      <div className="bg-cover bg-center bg-no-repeat bg-slate-200 py-20 px-6 text-center text-white" 
          style={{ backgroundImage: "url('https://media.cntraveller.com/photos/611be7b94e09f53b4373248a/16:9/w_2580,c_limit/praia-de-adraga-sintra-gettyimages-477469996.jpg')"
          }}>
        <div className="container mx-4  text-center">
          <h1 className="text-5xl text-white font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia Cova do Vapor
          </h1>
          <p className="text-white text-2xl mt-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Costa da Caparica</p>
        </div>
      </div>
      </header>
    

        <IPMAData />
        <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl text-custom-blue-green text-center font-bold mb-4">Characteristics</h2>
            <BeachCharacteristics characteristics={beachCharacteristics} />
        </section>
    
    </div>
          <Footer />

    </div>
  );
};

export default TestPage;
