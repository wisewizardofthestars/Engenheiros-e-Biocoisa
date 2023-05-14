import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Footer from '../components/Footer';
import ComponenteMistério from '../components/ComponenteMistério';


const Crowd = () => {
  
  return (
    <div>
      <div className="h-[85vh] bg-gradient-to-b from-blue-300 to-yellow-200">
        <UpperMenu />
  
        <div className="flex flex-col items-center justify-center my-8 mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-8 mt-8">Less Crowded Today</h2>
          <a href="/location" className="px-4 py-2 mr-4 text-white bg-custom-blue-green rounded-xl hover:bg-custom-deep-blue">
            Go Back
          </a>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-8">
            {/* Beach 1 */}
            <div className="bg-cover bg-center bg-no-repeat rounded-3xl p-8 border-4 border-sky-200 shadow-lg hover:shadow hover:transform hover:scale-105 transition duration-300" style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')" }}>
              <h1 className="text-5xl text-white font-bold text-center mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia da Saúde
              </h1>
              <p className="text-white text-xl text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Ocupação: 20%
              </p>
            </div>
  
            {/* Beach 2 */}
            <div className="bg-cover bg-center bg-no-repeat rounded-3xl p-8 border-4 border-sky-200 shadow-lg hover:shadow hover:transform hover:scale-105 transition duration-300" style={{ backgroundImage: "url('https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg')" }}>
              <h1 className="text-5xl text-white font-bold text-center mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
              Praia da Rainha
              </h1>
              <p className="text-white text-xl text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Ocupação: 35%
              </p>
            </div>
          </div>
        </div>
  
       
      </div>
      <Footer />
    </div>
    );
  };
export default Crowd;
