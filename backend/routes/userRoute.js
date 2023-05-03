const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.use('/user', {user})

// Route matches api/v1/user/signup
router.post('/signup', userController.signup);

module.exports = router; 