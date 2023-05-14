import React from 'react';
import UpperMenu from '../components/UpperMenu';
import ComponenteMistério from '../components/ComponenteMistério';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

const SearchPage = () => {
  const router = useRouter();

  const handleSearch = (event) => {
    const selectedBeach = event.target.value;
    if (selectedBeach) {
      router.push(selectedBeach);
    }
  };



  return (
    <div className="bg-custom-light-blue min-h-screen">
      <UpperMenu />

      <div className="bg-[url('https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457878.jpg&fm=jpg')] bg-repeat min-h-[80vh] flex items-center justify-center">
        <header className="py-8">
          <div className="bg-cover rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl p-4 py-16 px-24 border-4 border-custom-light-blue bg-slate-100">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl text-grey-400 font-bold">What beach are you looking for?</h1>

              <form onSubmit={handleSearch} className="flex items-center justify-center mt-8">
                <div className="relative mr-2">
                  <select
                    className="lock w-full py-2 font-bold text-gray-600 bg-custom-light-blue border rounded-full focus:border-custom-dark-gray focus:ring-custom-dark-gray focus:outline-none focus:ring focus:ring-opacity-40 items-center text-center"
                    id="category"
                    onChange={handleSearch}
                  >
                  <option value="">Select Option</option>
                  <option value="/saojoao">Praia de São João</option>
                  <option value="">Praia da Saúde</option>
                  <option value="praia-cds">Praia do CDS</option>
                  <option value="/covaDoVapor">Praia da Cova do Vapor</option>
                  <option value="">Praia da  Rainha</option>
                  <option value="">Praia do Castelo</option>
                  <option value="">Praia Morena</option>
                  <option value="">Praia da Sereia</option>
                  <option value="">Praia da Nova Vaga</option>
                  <option value="">Praia da Bela Vista</option>
                  <option value="">Praia da Ribeira de Cascais</option>
                  <option value="">Praia da Arriba</option>

                  </select>
                </div>
              </form>
            </div>

            <div className="mt-8">
              <a href="/surf" className="mx-4 text-black bg-custom-blue-green py-3 px-6 rounded-full shadow-lg  font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
                Best for surfing
              </a>
              <a href="/families" className=" mx-4 text-black bg-custom-blue-green py-3 px-6 rounded-full shadow-lg  font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
                Best for families
              </a>
              <a href="/dog" className="mx-4 text-black bg-custom-blue-green py-3 px-6 rounded-full shadow-lg  font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
                Best for dogs
              </a>
              <a href="/crowd" className="mx-4 text-black bg-custom-blue-green py-3 px-6 shadow-lg rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
                Less crowded
              </a>
              <a href="/swimming" className="mx-4 text-black bg-custom-blue-green py-3 px-6 shadow-lg rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
                Best for swimming
              </a>
            </div>
          </div>
        </header>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;