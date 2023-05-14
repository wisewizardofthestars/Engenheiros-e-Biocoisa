  import React from 'react';
  import UpperMenu from '../components/UpperMenu';
  import Link from 'next/link';
  import ComponenteMistério from '../components/ComponenteMistério';
  import Footer from '../components/Footer';


  const ModernPage = () => {
    return (
      <div className="flex flex-col min-h-screen" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/c/cf/Entroncamento_do_Transpraia.JPG')" }}>
      <UpperMenu />

        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
              Beach Finder is an AI powered app, that leverages the latest techonology to deliver the best possible experience to the user.
              With our innovative app we intend to deliver real-time information about Costa da Caparica, which we custom-tailor to the needs and wants of the user with
              our powerful integrated Artificial Inteligence tools.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-200 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Real-time data</h3>
                <p className="text-gray-700">
                  We deliver to the user the most up-to-date available data, including weather, occupation statistics and latest events
                </p>
              </div>
              <div className="p-4 bg-blue-200 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Integrated AI search</h3>
                <p className="text-gray-700">
                  We answer to the users' specific needs, instead of giving generic answers, and offer them personalized recommendations based on what they want
                </p>
              </div>
              <div className="p-4 bg-blue-200 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Upcoming events and news</h3>
                <p className="text-gray-700">
                  We give the users all the information of what's happening here and now, right at the tip of your fingers
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />

      </div>
    );
  };

  export default ModernPage;
