const FeaturePopup = ({ popupData, closePopup }) => {
  if (!popupData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        <img
          src={popupData.imageSrc}
          alt={popupData.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{popupData.title}</h3>
        <p className="text-gray-600 mb-4">{popupData.description}</p>
        <a
          href={popupData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a67c52] underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default FeaturePopup;
