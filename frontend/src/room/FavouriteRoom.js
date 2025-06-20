import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import { useFavorites } from './FavoriteContext'; 

const defaultRooms = [
  {
    name: 'Presidential Suite',
    price: '500',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  },
  {
    name: 'Ocean View Room',
    price: '350',
    image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
  },
];

const FavoriteRooms = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const allRooms = [...defaultRooms, ...favorites];

  const handleRoomClick = (room) => {
    navigate('/HotelRoomDetail', { state: room });
  };

  return (
    <>
      <Header />
      <div className="px-10 py-16 bg-[#fefefe] min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Your Favorite Rooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allRooms.map((room, index) => (
            <div
              key={index}
              onClick={() => handleRoomClick(room)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={room.image} alt={room.name} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{room.name}</h2>
                <p className="text-lg text-[#1e4d4f] font-bold">
                  ${room.price} <span className="text-sm text-gray-500 font-normal">/night</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteRooms;
