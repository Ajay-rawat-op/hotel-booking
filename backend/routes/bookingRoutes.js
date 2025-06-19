// routes/bookingRoutes.js
import express from 'express';
import Booking from '../models/bookingModel.js';

const router = express.Router();

// POST /api/bookings
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved", booking: newBooking });
  } catch (err) {
    console.error("Booking Error:", err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

export default router;
