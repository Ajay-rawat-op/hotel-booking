
import Hotel from './hotel.js';
import RoomGallery from './room/room.js';
import BookingForm from './booking/booking.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact.js';
import NewsPage from './pages/newz.js';
import HotelRoomDetail from './details/HotelRoomDetail.js';
import LoginPage from './loginPage/loginPage.js';
import SignUpPage from './loginPage/signUpPage.js';
import ProfilePage from './loginPage/profilePage.js';
import FavoriteRooms from './room/FavouriteRoom.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/roomgallery" element={<RoomGallery />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path='/HotelRoomDetail' element={<HotelRoomDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoriteRooms />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;