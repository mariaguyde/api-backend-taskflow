const User = require('../models/User');
const bcrypt = require('bcrypt');

// Créer un utilisateur
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: 'Username and password required' });

    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'Username already taken' });

    const user = new User({ username, password });
    const savedUser = await user.save();

    res.status(201).json({
      id: savedUser._id,
      username: savedUser.username,
      createdAt: savedUser.createdAt
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Connexion utilisateur (login basique)
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', username: user.username });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };
