import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import { useFavorites } from './FavoriteContext';
import rooms from '../data/roomData'; 

const RoomGallery = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const isLiked = (room) => favorites.some((r) => r.name === room.name);

  return (
    <>
      <Header />
      <div className="px-10 py-16 bg-[#f0efce] my-2 rounded-[5vw] min-h-screen">
        <h1 className="text-4xl font-serif font-bold text-center text-gray-800 mb-4">
          The Rawat ji Luxury Residences Hotel
        </h1>
        <h2 className="text-2xl text-center text-gray-500 mb-12">Rooms & Suites</h2>

        <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="relative max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl group"
            >
              <div onClick={() => navigate('/HotelRoomDetail', { state: room })} className="cursor-pointer">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-md px-5 py-4 rounded-b-3xl flex flex-col gap-1">
                <h3 className="text-gray-900 font-semibold text-lg">{room.name}</h3>
                <div className="flex items-center text-yellow-500 text-sm space-x-1">
                  {'★'.repeat(4)}<span className="text-gray-400">★</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[#1e4d4f] text-xl font-bold">
                    ${room.price}
                    <span className="text-sm text-gray-500 font-normal">/night</span>
                  </p>
                  <button
                    onClick={() => toggleFavorite(room)}
                    className={`p-2 rounded-full transition duration-300 ${isLiked(room) ? 'bg-[#d1d1d1]' : 'bg-transparent'}`}
                  >
                    <i className={`text-2xl ${isLiked(room) ? 'fa-solid' : 'fa-regular'} fa-thumbs-up text-[#1e4d4f]`}></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomGallery;
