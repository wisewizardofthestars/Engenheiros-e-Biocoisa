import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Footer from '../components/Footer';
import ComponenteMistério from '../components/ComponenteMistério';

const Dog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-custom-pale-blue to-custom-yellow">
      <UpperMenu />

      <div className="flex flex-col items-center justify-center my-8 mx-auto px-8 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8 mt-8">Better for dogs today</h2>
        <a href="/location" className="mx-4 shadow-lg text-white bg-custom-blue-green py-3 px-6 rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
          Go Back
        </a>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-8">
          {/* Beach 1 */}
          <div className="bg-cover bg-center bg-no-repeat rounded-3xl p-8 border-4 border-custom-deep-blue shadow-lg hover:shadow hover:transform hover:scale-105 transition duration-300" style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')" }}>
            <h1 className="text-5xl text-white font-bold text-center mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia da Adiça
            </h1>
            <p className="text-white text-xl text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Permitida a entrada de patudos
            </p>
          </div>

          {/* Beach 2 */}
          <div className="bg-cover bg-center bg-no-repeat rounded-3xl p-8 border-4 border-custom-deep-blue shadow-lg hover:shadow hover:transform hover:scale-105 transition duration-300" style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')" }}>
            <h1 className="text-5xl text-white font-bold text-center mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia da Ribeira de Cascais
            </h1>
            <p className="text-white text-xl text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Permitida a entrada de patudos
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dog;
