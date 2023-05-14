import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Footer from '../components/Footer';
import ComponenteMistério from '../components/ComponenteMistério';


const Families = () => {
  
  return (
    <div>
    <UpperMenu />
    

    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-300 to-yellow-200">    
    <h2 className="text-3xl font-bold text-center mb-8 mt-8">Less Crowded today</h2>
    <a href="/location" className="mx-4 shadow-lg text-white bg-custom-blue-green py-3 px-6 rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
    Go Back
  </a>
      <div className="my-8 mx-8 bg-cover bg-center bg-no-repeat rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mx-auto px-36 py-16 border-4 shadow-lg border-sky-200 hover:shadow hover:transform hover:scale-105 transition duration-300" 
          style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')"
          }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-white font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia da Saúde

          </h1>
          <p className="text-white text-xl mt-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Hoje muito bom poucas pessoas or something</p>
        </div>
      </div>
      <a href="/covaDoVapor">
      <div className="my-8 mx-8 bg-cover bg-center bg-no-repeat rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mx-auto px-36 py-16 border-4 border-sky-200 shadow-lg hover:shadow hover:transform hover:scale-105 transition duration-300" 
          style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')"
          }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-white font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia da Rainha
          </h1>
          <p className="text-white text-xl mt-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Location and otehr stuff</p>
        </div>
      </div>
      </a>
      <div className="my-8 mx-8 bg-cover bg-center bg-no-repeat rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mx-auto px-36 py-16 border-4 shadow-lg border-sky-200 hover:shadow hover:transform hover:scale-105 transition duration-300" 
          style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')"
          }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl text-white font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia do Castelo
          </h1>
          <p className="text-white text-xl mt-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Location and otehr stuff</p>
        </div>
      </div>
    

      
    </div>
          <Footer />

    </div>
  );
};

export default Families;
