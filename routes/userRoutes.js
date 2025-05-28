const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
