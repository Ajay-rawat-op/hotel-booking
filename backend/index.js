import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import bookingRoutes from './routes/bookingRoutes.js'
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);          // Auth routes
app.use('/api/contact', contactRoutes);    // Contact form
app.use('/api/bookings', bookingRoutes);   // ✅ Booking form

app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
