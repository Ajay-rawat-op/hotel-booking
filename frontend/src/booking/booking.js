import { useState } from "react";
import axios from "axios";
import Header from "../header/header"; // update path as needed

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Single Room");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const totalGuests = adults + children;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        checkIn,
        checkOut,
        roomType,
        adults,
        children,
        totalGuests,
      };

      const response = await axios.post("http://localhost:3001/api/bookings", bookingData);
      alert("Booking successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Booking failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden font-body">
      <Header />
      <style>
        {`
          @keyframes pastelCycle {
            0% { background-color:rgba(255, 255, 255, 0.21); }
            25% { background-color:rgba(223, 207, 107, 0.81); }
            50% { background-color:rgba(157, 228, 195, 0.86); }
            75% { background-color:rgba(162, 231, 228, 0.83); }
            100% { background-color:rgba(236, 196, 196, 0.81); }
          }
        `}
      </style>
      <div className="absolute inset-0 animate-[pastelCycle_20s_linear_infinite]" />
      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-white/80 p-6 rounded-lg shadow mb-8 border border-gray-200 backdrop-blur-sm">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-semibold text-yellow-500">★ ★ ★ ★ ★</h4>
            <p className="text-sm text-gray-700 mt-2 max-w-2xl mx-auto">
              Fill out this form to reserve your ideal stay. Select dates, rooms, and provide guest details.
            </p>
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">RESERVATION</p>
              <p className="text-lg font-semibold text-gray-800">0800 999 00 08</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
          <h2 className="text-3xl font-satisfy text-gray-800 text-center mb-6">
            HOTEL BOOKING FORM
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium text-gray-700">Check In</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Check Out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Room Type</label>
              <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400">
                <option>Single Room</option>
                <option>Double Room</option>
                <option>Deluxe Suite</option>
                <option>Family Suite</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">Adults</label>
                <input type="number" min="1" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Children</label>
                <input type="number" min="0" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
              </div>
            </div>
            <div className="text-center text-gray-800 font-semibold">
              Total Guests: {totalGuests}
            </div>
            <div className="text-center">
              <button type="submit" className="w-full py-3 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
