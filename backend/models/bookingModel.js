import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  roomType: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  totalGuests: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
