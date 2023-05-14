import React from 'react';
import UpperMenu from '../components/UpperMenu';
import BeachPost from '@/components/BeachPost';
import Link from 'next/link';
import ComponenteMistério from '../components/ComponenteMistério';
import Footer from '../components/Footer';

const Home = () => {
  return (
    
    <div className="bg-gradient-to-b from-custom-pale-blue to-custom-yellow min-h-screen">
      <UpperMenu />      
      <div className="bg-gradient-to-b from-custom-pale-blue to-custom-yellow">
      {/* Features section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Welcome to Costa da Caparica</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          
        
          <BeachPost
            title="Praia da Cova do Vapor"
            imageSrc="https://media.traveler.es/photos/61376c1ff00fb1ba8d867479/master/w_1800,h_1195,c_limit/145584.jpg"
            icon="fas fa-laptop"
            description="Nada como um Cai Bem, a bebida oficial da Cova do Vapor, um refresco com ginjinha e limonada, para começar o dia. A primeira praia da Caparica, com a sua vila de pescadores, atrai uma fauna mais alternativa que quer evitar a confusão da Costa. Até parece que o estamos a ver numa mesa do Albatroz, o restaurante da praia, a olhar ora para Lisboa, ora para o farol do Bugio. Fica na foz do Tejo e é ideal para os que preferem um  mar mais tranquilo. A maneira mais rápida é chegar de ferry (com carro ou bicicleta), desde Belém até à Trafaria. A partir daí são cinco minutos."
          />

          <BeachPost
            title="Praia de São João"
            imageSrc="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg"
            icon="fas fa-laptop"
            description="Encostada à praia da Cova do Vapor e com Bandeira Azul, é a escolhida por muitas famílias e surfistas que visitam a Caparica há décadas. Talvez pelas ondas de classe mundial ou por ser  Tem um parque de estacionamento que inclui várias saídas, para não estragar um dia de praia perfeito com trânsito. Uma das esplanadas mais populares é a do restaurante Kontiki – se ainda não conhece, aproveite para experimentar."
          />
          
          <BeachPost
            title="Praia do CDS"
            imageSrc="https://www.onfiresurfmag.com/wp-content/uploads/2023/04/Luis-Perloiro_23CaparicaSurfFest_0085_PedroMestre.jpg"
            icon="fas fa-laptop"
            description="Não tem nada a ver com o partido. A sigla é a do Centro Desportivo de Surf, que estava pintada na década de 
            1970 nas pedras do pontão para a distinguir de outras praias. É a praia com Bandeira Azul, vigiada e concessionada, 
            mais perto do centro de Lisboa, mas no Inverno e durante a maré cheia o areal quase desaparece. Muito procurada por quem chega à Costa de autocarro, 
            é óptima para a prática de desportos náuticos, como o surf. Ideal para quem chega de transportes públicos, a praia também é acessível pela Rua Pedro Álvares de Cabral, 
            onde existe um parque de estacionamento."
          />
           
        </div>
      </section>

      <section className="mx-4 border-4 rounded-3xl border-custom-blue-green bg-cover py-20 px-6 text-center text-white" style={{ backgroundImage: 'url("https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-457878.jpg&fm=jpg")'}}>
        <div style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"}}>
        <h1 className="text-4xl font-bold mb-4 text-shadow-lg ">Search now for a beach</h1>
        <p className="text-lg mb-8">No beaches?</p>
        </div>
        <Link href="/location" className="text-black bg-custom-blue-green py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">Find a beach</Link>
      </section>

    {/* Chat section */}
    <section className="shadow-lg mx-auto my-8 container px-4 py-4 bg-white rounded-lg shadow-lg p-8">
        <h2 className=" text-3xl mt-4 font-bold text-center mb-16">Welcome to Beaches Recommend</h2>
        {/* ...other content */}
        <ComponenteMistério /> {/*  */}
      </section>
   
</div>
<Footer />
    </div>
    
  );
};

export default Home;