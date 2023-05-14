// CustomComponent.js

import React from 'react';
import Link from 'next/link';
const imageUrls = {
  costa_vapor: 'https://media.timeout.com/images/105265189/750/562/image.jpg',
  sao_joao : 'https://www.worldbeachguide.com/photos/costa-da-cparica-portugal.jpg',
  rei: 'https://offloadmedia.feverup.com/lisboasecreta.co/wp-content/uploads/2021/05/13053951/Praia-da-Morena-%40Beachcam.jpeg',

  cds: 'https://s7a5n8m2.stackpathcdn.com/wp-content/uploads/2018/07/caparica-portugal.jpg',
  
  sereia: 'https://www.portugal.com/wp-content/uploads/2022/09/linda-robert-BXUu79N-uI0-unsplash-scaled.jpeg',
 
}

function CustomComponent(props) {
  // Access the information passed as props
  const { part } = props;
  const { name } = part;
  let imageUrl = '';

  if (
    part === 'Praia da Cova do Vapor' ||
    part === 'Praia da Saúde' ||
    part === 'Praia da Arriba'
  ) {
    imageUrl = imageUrls.costa_vapor;
  } else if (
    part === 'Praia de São João' ||
    part === 'Praia da Nova Vaga' ||
    part === 'Praia da Rainha'
  ) {
    imageUrl = imageUrls.sao_joao;
  } else if (part === 'Praia do CDS' || part === 'Praia do Castelo') {
    imageUrl = imageUrls.cds;
  } else if (
    part === 'Praia da Sereia' ||
    part === 'Praia da Morena' ||
    part === 'Praia da Bela Vista'
  ) {
    imageUrl = imageUrls.sereia;
  } else {
    imageUrl = imageUrls.rei;
  }

  return (
    <main className="container mx-8 px-4 py-4">
    <section className="text-center">
      <div className="my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8">
      <Link href={`/${encodeURIComponent(name)}`} passHref>          {/* Use Link component and set the "to" prop to `/part/${encodeURIComponent(name)}` */}
          <div
            className="bg-custom-blue-green rounded-2xl shadow-lg p-8 border-4 shadow-lg border-sky-200 hover:shadow hover:transform hover:scale-105 transition duration-300"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3 className="text-2xl text-white font-bold mb-4">{part}</h3>
          </div>
        </Link>
      </div>
    </section>
  </main>
);
}
export default CustomComponent;
