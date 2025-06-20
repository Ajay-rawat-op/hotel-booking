
const Experience = () => {
  return (
    <div className="px-4 py-12 sm:px-6 md:px-12 lg:px-20 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#f0efce] rounded-[5vw]">
      {/* Left Content */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-2xl sm:text-3xl  text-gray-900 font-rancho">
          THE RAWAT JI LUXURY RESIDENCES HOTEL
        </h2>
        <h1 className=" text-3xl sm:text-4xl font-bold font-dancing text-gray-800">
          Enjoy A Luxury <br />
          Experience
        </h1>
        <p className="text-md md:text-base text-gray-600 font-semibold">
          Welcome to the first five-star hotel in India.
          Experience luxury and comfort like never before. Hotel ut nisl
          quem, mistibulum ac quam nec odio elementum scelerisque, aliquet
          sapien. Experience luxury and comfort like never before. Hotel ut
          nisl quem, mistibulum ac quam nec odio elementum scelerisque,
          aliquet sapien. Experience luxury and comfort like never before.
          Hotel ut nisl quem, mistibulum ac quam nec odio elementum
          scelerisque, aliquet sapien.
        </p>
        <p className="text-xl sm:text-2xl font-bold text-gray-900">
          RESERVATION
          <br />
          0800 999 00 08
        </p>
      </div>

      {/* Right Content (Images) */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
        {/* Left Single Image (Taller) */}
        <div className="mt-15 sm:w-1/2">
          <img
            src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury Room 1"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Right Two Stacked Images */}
        <div className="sm:w-1/2 flex flex-col justify-between space-y-6">
          <img
            src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury Room 2"
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury Room 3"
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>

    </div>
  );
};

export default Experience;
