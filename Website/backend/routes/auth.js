const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /login - Validate username and password
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username exists
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'invalid username' });

    // Verify password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) return res.status(400).json({ error: 'invalid password' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
