const express = require('express');
const { signIn } = require('../controllers/authController');

const router = express.Router();

// SignIn route
router.post('/signin', signIn);

module.exports = router;
