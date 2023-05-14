import React from 'react';
import UpperMenu from '../components/UpperMenu';
import Link from 'next/link';
import ComponenteMistério from '../components/ComponenteMistério';
import Footer from '../components/Footer';
import EventsPost from '../components/EventsPost';


const ModernPage = () => {
  return (
    <div className="bg-gradient-to-b from-custom-pale-blue to-custom-yellow  min-h-screen">
     <UpperMenu />

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Find Your Next Adventure!</h2>
          <p className="text-gray-700">
          Welcome to our events page! Discover the latest happenings in Costa da Caparica - music concerts, food festivals, sport events and more.<br/>
          Our calendar is always up to date. Find your next adventure or create the adventure yourself!
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Events in Costa da Caparica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/originals/8b/4c/32/8b4c32b099caa0cd7dd07461bf130b82.jpg")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                    Surf and Drinks</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 14 May<br/>
                Time: 5 PM<br/>
                Location: Praia de São João<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/736x/8a/9e/f0/8a9ef062eb43b48b92801c2613c581db--purple-sunset-pink-sky.jpg") '}} >
                <div>
                </div>
              <h3 className="text-lg text-white font-bold mb-2"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                    Run with Us</h3>
              <p className="text-justify text-white font-bold mb-1"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 16 May<br/>
                Time: 8 AM<br/>
                Location: Parque Urbano Costa da Caparica<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/736x/98/64/5e/98645e8961da29678b12422b84a53035.jpg")'}}>
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Learn Portuguese</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 18 May<br/>
                Time: 10 AM<br/>
                Location: Praia Cova do Vapor<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/originals/2c/74/57/2c74574b06c53f87232a36f17ceca0c9.png")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Late Night Coffee</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 19 May<br/>
                Time: 10 PM<br/>
                Location: Café Sunrise<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1171698449/photo/confident-young-couple-kayaking-on-river-together-with-sunset-on-the-background.jpg?s=612x612&w=0&k=20&c=vB3heuj9P7K5hXUAMPpqEdyp6NW8ImjEx0Qa7r_8Das=")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Kayaking</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 21 May<br/>
                Time: 9 AM<br/>
                Location: Parque Urbano Costa da Caparica<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/736x/cd/1d/b8/cd1db857e4b5acf35aae4fdf2e9f914d.jpg")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Picnic</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 24 May<br/>
                Time: 4.30 PM<br/>
                Location: Praia de São João<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/originals/9e/6f/53/9e6f535c7395976202b2dd0045694bb0.jpg")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                QueerSummit</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 28 May<br/>
                Time: 3 PM<br/>
                Location: Parque Urbano Costa da Caparica<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/736x/20/48/e8/2048e86755773ac17b52d1a4d0a6d6de.jpg")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Surf Class</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 1 June<br/>
                Time: 3 PM<br/>
                Location: Praia do CDS<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
            </div>
            <div 
              className="p-4 bg-blue-200 rounded-lg bg-cover"
              style={{ backgroundImage: 'url("https://i.pinimg.com/736x/33/fd/5b/33fd5b3ad14a4e6e62d6544b33a19c62.jpg")'}} >
              <h3 className="text-lg text-white font-bold mb-2"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Sol da Caparica 2023</h3>
              <p className="text-justify text-white font-bold mb-1"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                Date: 17 Aug to 20 Aug<br/>
                Time: 10 PM<br/>
                Location: Parque Urbano Costa da Caparica<br/><br/>
                <button className="text-white hover:underline"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
                  Read More
                </button>
              </p>
          </div>
          </div>
        </section>
        <div className="mx-auto mt-8 flex justify-center items-center">
            <button className="px-4 py-2 mr-4 text-white bg-custom-blue-green rounded hover:bg-custom-deep-blue">
              View More
            </button>
            <button className="px-4 py-2 text-white bg-custom-blue-green rounded hover:bg-custom-deep-blue">
              Create Event
            </button>
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModernPage;
