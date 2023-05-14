import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Footer from '../components/Footer';
import ComponenteMistério from '../components/ComponenteMistério';
import BeachCharacteristics from '../components/BeachCharacteristics ';
import { faUmbrellaBeach, faFlag, faWater, faLifeRing, faFirstAid, faToilet, faTrash, faBroom, faInfoCircle, faParking } from "@fortawesome/free-solid-svg-icons";
import IPMAData from './IPMAData';

const beachCharacteristics = [
  { name: "Costal beach", icon: faUmbrellaBeach },
  { name: "Blue Flag", icon: faFlag },
  { name: "Waves of special interest", icon: faWater },
  { name: "Lifeguard", icon: faLifeRing },
  { name: "First aid station", icon: faFirstAid },
  { name: "Sanitary facilities", icon: faToilet },
  { name: "Waste collection", icon: faTrash },
  { name: "Beach cleaning", icon: faBroom },
  { name: "Information panel", icon: faInfoCircle },
  { name: "Parking", icon: faParking },
];

const TestPage = () => {
  
  return (
    <div>
    <UpperMenu />

    <div className="bgcustom-yellow min-h-screen">
      <header className="py-0">
      <div className="bg-cover bg-center bg-no-repeat bg-slate-200 py-20 px-6 text-center text-white" 
          style={{ backgroundImage: "url('https://veganfamilyadventures.com/wp-content/uploads/2023/01/costa-da-caparica-where-the-river-meets-the-ocean.png')"
          }}>
        <div className="container mx-4  text-center">
          <h1 className="text-5xl text-white font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia de São João
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
