import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import bookingRoutes from './routes/bookingRoutes.js' // ✅ NEW: Booking form route
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON payloads

// Routes
app.use('/api/auth', authRoutes);          // Auth routes
app.use('/api/contact', contactRoutes);    // Contact form
app.use('/api/bookings', bookingRoutes);   // ✅ Booking form

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
