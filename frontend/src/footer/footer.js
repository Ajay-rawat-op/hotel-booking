
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-2xl font-rancho text-yellow-400 mb-3">Rawatji Hotel</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            A luxury destination where elegance meets excellence. Discover comfort, style, and top-tier service at every stay.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'Find Stays', 'Favorites', 'Contact', 'News'].map((link, i) => (
              <li key={i} className="hover:text-yellow-400 cursor-pointer transition duration-300">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">Email: info@Rawatjihotel.com</p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-400">123 Beach Road, Paradise City</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-yellow-400 hover:text-white transition duration-300 " target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" className="text-yellow-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" className="text-yellow-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" className="text-yellow-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()}  Rawatji Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
