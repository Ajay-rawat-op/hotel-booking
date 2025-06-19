import { useState } from "react";
import Header from "../header/header";
import axios from "axios";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      title: "Address",
      details: "BROADWAY, NEW YORK, NY, UNITED STATES",
      icon: "📍",
    },
    {
      title: "Phone",
      details: "+1 123 444 55 66",
      icon: "📞",
    },
    {
      title: "Email",
      details: "Rawatji@gmail.com",
      icon: "✉️",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen px-4 sm:px-6 lg:px-8 relative">
      <Header />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1E40AF] mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you! Whether it's a question, feedback, or just a hello — reach out!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition text-center border border-gray-200"
          >
            <div className="text-4xl mb-4">{info.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{info.title}</h3>
            <p className="mt-2 text-gray-600">{info.details}</p>
          </div>
        ))}
      </div>

      {/* Image + Description */}
      <div className="mt-16 flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-[#1E40AF] mb-4">We're Here to Help</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Don’t hesitate to reach out. Our team is ready to answer your questions and assist with anything
            you need. We aim to respond within 24 hours.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FFC107] text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-[#ffb300] transition animate-pulseBtn"
          >
            Send a Message
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=1024x1024&w=is&k=20&c=UIp4j9qm93rIBAbfu7AinKiudy-w60YTdyRLt0GFgk4="
            alt="Contact"
            className="rounded-xl w-full max-w-md mx-auto object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us on the Map</h3>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193967.92409027475!2d-74.11808640784292!3d40.71277651099233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19fbd715d9%3A0x7f20a65e099d4aef!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1611346786638!5m2!1sen!2suk"
            className="w-full h-72 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Modal with animation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg animate-[fadeInScale_0.3s_ease-out]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
              ></textarea>
              <button
                type="submit"
                className="bg-[#000000] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
