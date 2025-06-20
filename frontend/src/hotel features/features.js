import { useEffect, useState } from "react";
import features from "../data/featuresData";
import FeaturePopup from "../data/FeaturePopup";

const Hotelfeatures = () => {
  const [popupData, setPopupData] = useState(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    features.map(() => 0)
  );

  const openPopup = (imageSrc, title, description, link) => {
    setPopupData({ imageSrc, title, description, link });
  };

  const closePopup = () => setPopupData(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % features[i].images.length)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[99vh] overflow-y-scroll bg-white py-16 px-4 sm:px-6 lg:px-16 space-y-12">
      
      {/* 🔥 Heading Section Added Here */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-heading  text-lg text-gray-800 mb-2">
          Our Hotel Features
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto font-rancho text-lg">
          Discover the best of what we offer — comfort, luxury, and unforgettable experiences.
        </p>
      </div>

      {/* Features List */}
      <div className="max-w-5xl mx-auto space-y-12">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center rounded-[2vw] ${item.bg}`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={item.images[currentImageIndexes[idx]]}
                alt={item.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Unavailable";
                }}
                className="w-full h-72 object-cover rounded-xl shadow-lg transition-all duration-500"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:px-12 text-center lg:text-left">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{item.tag}</p>
              <h2 className="text-2xl font-heading text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600 mb-4 font-rancho">{item.description}</p>
              <button
                className="bg-[#a67c52] hover:bg-[#916845] text-white px-5 py-2 rounded-md transition"
                onClick={() =>
                  openPopup(
                    item.images[currentImageIndexes[idx]],
                    item.title,
                    item.description,
                    item.link
                  )
                }
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      <FeaturePopup popupData={popupData} closePopup={closePopup} />
    </div>
  );
};

export default Hotelfeatures;
