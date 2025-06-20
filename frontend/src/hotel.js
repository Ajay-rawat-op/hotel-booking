import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Experience from './experience/experience';
import RoomGallery from './room/room';
import Footer from './footer/footer';
import TestimonialSlider from './slider/images.js';
import HotelFeatures from './hotel features/features.js';
import Header from './header/header.js';
import sliderContents from './data/sliderContents.js';


const Hotel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-screen font-cursive relative overflow-hidden mb-2">
        {/* Image Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {sliderContents.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`slide-${index}`}
              className={`absolute w-full h-full object-cover brightness-150 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full h-full flex flex-col text-white">
          <Header />
          <main className="pt-[120px] w-full flex justify-center items-center flex-grow px-4">
            <div className="relative h-[250px] w-full max-w-5xl flex items-center justify-center text-center md:text-left">
              {sliderContents.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute transition-opacity duration-1000 ease-in-out w-full ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } transform transition-all duration-1000`}
                >
                  <div className="p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-yellow-300 mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-100 mb-6 tracking-wide">
                      {slide.subtitle}
                    </p>
                    <button
                      onClick={() => navigate('/roomgallery')}
                      className="bg-yellow-400 text-black font-dancing text-lg bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
                    >
                      View Rooms
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Experience />
      <RoomGallery />
      <HotelFeatures />
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default Hotel;
