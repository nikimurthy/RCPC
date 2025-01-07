import express from 'express';
import Club from '../models/clubs.js';

const router = express.Router();

// POST /login - Validate username and password
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username exists
    const club = await Club.findOne({ username });
    if (!club) return res.status(400).json({ error: 'invalid username' });

    // Verify password
    const isPasswordCorrect = await club.comparePassword(password);
    if (!isPasswordCorrect) return res.status(400).json({ error: 'invalid password' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;