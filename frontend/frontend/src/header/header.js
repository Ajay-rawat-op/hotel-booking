import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate('/loginPage');
  };

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-black/50 to-gray-800/60 backdrop-blur-md shadow-lg flex justify-between items-center px-4 sm:px-6 lg:px-20 py-3 transition-all duration-300 font-body">
      {/* Logo */}
      <h1 className="text-3xl sm:text-4xl font-bold font-satisfy tracking-widest text-yellow-400">
        Rawat ji
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-white text-sm lg:text-base">
          {['Home', 'Find Stays', 'Favorites', 'Contact', 'News'].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer hover:text-yellow-400 transition"
              onClick={() => {
                const routes = {
                  Home: '/',
                  'Find Stays': '/roomgallery',
                  Favorites: '/favorites',
                  Contact: '/contact',
                  News: '/news',
                };
                navigate(routes[item]);
              }}
            >
              {item}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-yellow-400"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3 items-center">
        {isLoggedIn && (
          <button
            onClick={() => navigate('/booking')}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300 hover:scale-105"
          >
            Book Now
          </button>
        )}
        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate('/profile')}
              className="bg-white text-yellow-500 hover:bg-yellow-400 hover:text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/loginPage')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-yellow-500 hover:bg-yellow-400 hover:text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300"
            >
              Signup
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden z-40 transition-all duration-300">
          <ul className="flex flex-col px-6 py-4 space-y-5 text-white text-base font-medium">
            {[
              { label: 'Home', path: '/' },
              { label: 'Find Stays', path: '/roomgallery' },
              { label: 'Favorites', path: '/favorites' },
              { label: 'Contact', path: '/contact' },
              { label: 'News', path: '/news' },
            ].map(({ label, path }) => (
              <li
                key={label}
                className="cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={() => handleNavClick(path)}
              >
                {label}
              </li>
            ))}

            {isLoggedIn && (
              <li>
                <button
                  onClick={() => handleNavClick('/booking')}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg transition"
                >
                  Book Now
                </button>
              </li>
            )}

            {isLoggedIn ? (
              <>
                <li>
                  <button
                    onClick={() => handleNavClick('/profile')}
                    className="w-full bg-white text-yellow-500 hover:bg-yellow-400 hover:text-white py-2 px-4 rounded-full shadow-lg transition"
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-lg transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => handleNavClick('/loginPage')}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg transition"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('/signup')}
                    className="w-full bg-white text-yellow-500 hover:bg-yellow-400 hover:text-white py-2 px-4 rounded-full shadow-lg transition"
                  >
                    Signup
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
