const User = require('../models/User');
const bcrypt = require('bcrypt');


// GET - récupérer toutes les tâches
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un utilisateur
const registerUser = async (req, res) => {
  try {
    const { pseudo, password } = req.body;
    if (!pseudo || !password)
      return res.status(400).json({ message: 'pseudo and password required' });

    const existing = await User.findOne({ pseudo });
    if (existing) return res.status(400).json({ message: 'pseudo already taken' });

    const user = new User({ pseudo, password });
    const savedUser = await user.save();

    res.status(201).json({
      id: savedUser._id,
      pseudo: savedUser.pseudo,
      createdAt: savedUser.createdAt
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Connexion utilisateur (login basique)
const loginUser = async (req, res) => {
  try {
    const { pseudo, password } = req.body;
    const user = await User.findOne({ pseudo });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', pseudo: user.pseudo, idUser:user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers, registerUser, loginUser };
