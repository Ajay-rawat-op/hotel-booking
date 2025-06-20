import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HotelRoomDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  if (!state) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f0efce] to-[#e4dccf]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1e4d4f] mb-4">No Room Data Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#1e4d4f] text-white rounded-full shadow-md hover:bg-[#163a3b] transition"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  const { name, image, price } = state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f2] to-[#f3f0e8] px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-[2.5rem] overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={image}
              alt={name}
              className="w-full h-[450px] md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#1e4d4f] mb-4">{name}</h1>
              <p className="text-xl text-[#444] mb-6 leading-relaxed">
                Discover the perfect blend of elegance and comfort in our <strong>{name}</strong>. Designed for both relaxation and luxury, it features plush bedding, ambient lighting, a stunning view, and state-of-the-art amenities to elevate your stay.
              </p>

              <div className="text-[#1e4d4f] text-3xl font-bold mb-6">
                ${price} <span className="text-base font-medium text-gray-500">/night</span>
              </div>

              <ul className="mb-6 text-gray-700 space-y-2">
                <li>✔️ King-sized Bed with Premium Linens</li>
                <li>✔️ Free High-Speed WiFi</li>
                <li>✔️ In-room Dining & Mini Bar</li>
                <li>✔️ 24x7 Room Service & Housekeeping</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-6">
              {isLoggedIn ? (
                <button
                  onClick={() => navigate('/booking', { state })}
                  className="px-6 py-3 bg-[#1e4d4f] text-white rounded-full hover:bg-[#143b3d] transition font-medium shadow-lg"
                >
                  Book Now
                </button>
              ) : (
                <button
                  onClick={() => navigate('/loginpage')}
                  className="px-6 py-3 bg-[#1e4d4f] text-white rounded-full hover:bg-[#143b3d] transition font-medium shadow-lg"
                >
                  Login to Book
                </button>
              )}

              <button
                onClick={() => navigate('/roomgallery')}
                className="px-6 py-3 bg-transparent border-2 border-[#1e4d4f] text-[#1e4d4f] rounded-full hover:bg-[#1e4d4f] hover:text-white transition font-medium shadow-sm"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetail;
