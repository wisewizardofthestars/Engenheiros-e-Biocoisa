
import React, { useEffect, useState } from 'react';
import ComponenteMistério from '@/components/ComponenteMistério';

const IPMAData = () => {
  const [data, setData] = useState(null);
  const [weatherTypes, setWeatherTypes] = useState(null);
  const [windSpeedClasses, setWindSpeedClasses] = useState(null);
  const [precipitationClasses, setPrecipitationClasses] = useState(null);
  const [uvData, setUvData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json'
        );

        if (response.ok) {
          const responseData = await response.json();
          const filteredData = responseData.data.find(
            (item) => item.globalIdLocal === 1151200
          );
          setData(filteredData);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchWeatherTypes = async () => {
      try {
        const response = await fetch(
          'https://api.ipma.pt/open-data/weather-type-classe.json'
        );

        if (response.ok) {
          const responseData = await response.json();
          setWeatherTypes(responseData.data);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherTypes();
  }, []);

  useEffect(() => {
    const fetchWindSpeedClasses = async () => {
      try {
        const response = await fetch(
          'https://api.ipma.pt/open-data/wind-speed-daily-classe.json'
        );

        if (response.ok) {
          const responseData = await response.json();
          setWindSpeedClasses(responseData.data);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchWindSpeedClasses();
  }, []);

  useEffect(() => {
    const fetchPrecipitationClasses = async () => {
      try {
        const response = await fetch(
          'https://api.ipma.pt/open-data/precipitation-classe.json'
        );

        if (response.ok) {
          const responseData = await response.json();
          setPrecipitationClasses(responseData.data);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrecipitationClasses();
  }, []);

  useEffect(() => {
    const fetchUvData = async () => {
      try {
        const response = await fetch(
          'https://api.ipma.pt/open-data/forecast/meteorology/uv/uv.json'
        );

        if (response.ok) {
          const responseData = await response.json();
          setUvData(responseData);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUvData();
  }, []);

  const getWeatherTypeName = (typeId) => {
    if (weatherTypes && weatherTypes.length > 0) {
      const weatherType = weatherTypes.find(
        (type) => type.idWeatherType === typeId
      );
      if (weatherType) {
        return weatherType.descWeatherTypeEN;
      }
    }
    return 'Unknown';
  };

  const getWindSpeedClass = (classId) => {
    if (windSpeedClasses && windSpeedClasses.length > 0) {
      const windSpeedClass = windSpeedClasses.find(
        (classItem) => classItem.classWindSpeed == classId
      );
      if (windSpeedClass) {
        return windSpeedClass.descClassWindSpeedDailyEN;
      }
    }
    return 'Unknown';
  };

  const getPrecipitationClass = (prob) => {
    if (precipitationClasses && precipitationClasses.length > 0) {
      const precipitationClass = precipitationClasses.find((classItem) => {
        const classProb = parseFloat(classItem.classPrecInt);
        const itemProb = parseFloat(prob);
        return classProb === itemProb;
      });
  
      if (precipitationClass) {
        return precipitationClass.descClassPrecIntEN;
      }
    }
  
    return 'Unknown';
  };

  function getUvTypeName(uvIndex) {
    if (uvIndex < 3) {
      return "Low";
    } else if (uvIndex < 6) {
      return "Moderate";
    } else if (uvIndex < 8) {
      return "High";
    } else if (uvIndex < 11) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }
  

  
  

  return (
    <div className="bg-gradient-to-b from-custom-pale-blue to-custom-yellow min-h-screen">
      {isLoading ? (
      <p>Loading data...</p>
    ) : data && weatherTypes && windSpeedClasses && precipitationClasses ? (
      <main className="container mx-auto px-4 py-8">
          <section className="text-center">
            <h2 className="text-3xl text-custom-dark-gray font-bold mb-8">Conditions Today</h2>
            <a href="/location" className="mx-4 shadow-lg text-white bg-custom-blue-green py-3 px-6 rounded-full font-bold hover:text-white hover:bg-custom-deep-blue transition duration-300 ease-in-out">
              Go Back
            </a>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-custom-blue-green font-bold mb-4">Weather today</h3>
                <div className="grid grid-cols-2 gap-4 my-6">
                <span className="font-bold">Min Temperature:</span> {data.tMin}°C
                <span className="font-bold">Max Temperature:</span> {data.tMax}°C 
                <span className="font-bold">Weather Type:</span> {getWeatherTypeName(data.idWeatherType)}
                <span className="font-bold">Precipitation:</span> {getPrecipitationClass(data.precipitaProb)}
                <span className="font-bold">UV:</span> {getUvTypeName(data.uvIndex)}               
                 </div>
                <p className="text-gray-700 text-left">
  {(getWeatherTypeName(data.idWeatherType) === "Clear sky" || getWeatherTypeName(data.idWeatherType) === "Partly cloudy") ? (
    <>
     - Oh, what a nice day to go to the beach! Enjoy the sunny weather and soak up some vitamin D.
    </>
  ) : (getWeatherTypeName(data.idWeatherType) === "Sunny intervals" || getWeatherTypeName(data.idWeatherType) === "Cloudy") ? (
    <>
     - Don't forget to bring an umbrella today. It looks like it's going to rain. Stay dry!
    </>
  ) : (getWeatherTypeName(data.idWeatherType) === "Cloudy (High cloud)") ? (
    <>
      - It might be a bit cloudy today, but don't let that dampen your spirits. Find indoor activities to enjoy!
    </>
  ) : null}
</p>
<p className="text-gray-700 text-justify">
  {getUvTypeName(data.uvIndex) === "Low" ? (
    <>
     - UV index is low today. It's a good time to enjoy outdoor activities without much concern about sunburn. Don't forget to wear sunscreen!
    </>
  ) : getUvTypeName(data.uvIndex) === "Moderate" ? (
    <>
     - UV index is moderate today. Take necessary precautions to protect your skin from the sun. Apply sunscreen and wear a hat.
    </>
  ) : getUvTypeName(data.uvIndex) === "High" ? (
    <>
      - UV index is high today. It's important to take extra precautions. Wear sunscreen, a hat, and sunglasses. Seek shade during peak hours.
    </>
  ) : getUvTypeName(data.uvIndex) === "Very high" ? (
    <>
     - UV index is very high today. Avoid direct sun exposure if possible. Wear protective clothing, sunglasses, and apply a broad-spectrum sunscreen frequently.
    </>
  ) : getUvTypeName(data.uvIndex) === "Extreme" ? (
    <>
     - UV index is extreme today. Stay indoors if possible, especially during peak hours. If you need to be outside, use maximum sun protection measures.
    </>
  ) : null}
</p>



                <div className="flex items-center justify-center">
       <img
          src="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png"
        alt="Description of the image"
        className="mt-4 mx-4 w-24 h-24 rounded-full object-cover"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5016/5016767.png"
          alt="Description of the image"
          className="mt-4 w-24 h-24 rounded-full object-cover"
        />
          </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-custom-blue-green font-bold mb-4">Ocean today</h3>
                <div className="grid grid-cols-2 gap-4 my-10">
         
                <span className="font-bold">Wind Direction:</span> {data.predWindDir}
                <span className="font-bold">Wind Speed:</span> {getWindSpeedClass(data.classWindSpeed)}
                </div>
                <p className="text-gray-700 text-justify">
        {getWindSpeedClass(data.classWindSpeed) === "Weak" ? (
          <>
           - The wind is calm today. Enjoy the stillness and tranquility of the weather. The ocean is likely to be calm, with gentle waves lapping the shore, perfect for swimming and water activities.
          </>
        ) : getWindSpeedClass(data.classWindSpeed) === "Moderate" ? (
          <>
           - There is a light breeze today, creating a pleasant atmosphere. The ocean might have a slight ripple, offering a refreshing and enjoyable swimming experience.
          </>
        ) : getWindSpeedClass(data.classWindSpeed) === "Strong" ? (
          <>
           - There is a strong breeze today, bringing a sense of adventure to the day. The ocean might have choppy waves, providing an exhilarating experience for experienced surfers and thrill-seekers.
          </>
        ) : getWindSpeedClass(data.classWindSpeed) === "Very Strong" ? (
          <>
           - The wind speed is high today, making it important to exercise caution. The ocean could have rough waves and strong currents, making it unsuitable for swimming but enticing for experienced surfers seeking a challenge.
          </>
        ) : null}
      </p>

                <div className="flex items-center justify-center">
              <img
                src="https://www.freepnglogos.com/uploads/sea-png/sea-water-wave-drip-image-pixabay-40.png"
                alt="Description of the image"
                className="mt-4 mx-4 w-24 h-24 rounded-full object-cover"
              />
              <img
                src="https://static.thenounproject.com/png/81143-200.png"
                alt="Description of the image"
                className="mt-4 w-24 h-24 rounded-full object-cover"
              />
            </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-custom-blue-green font-bold mb-4">Ask a question</h3>
                <ComponenteMistério />
              </div>
            </div>
          </section>
          
           
          
        </main>
        ) : (
          <p>Failed to fetch data.</p>
        )}

        <div> 
         

        </div>


        
 
</div>



  );
};

export default IPMAData;

