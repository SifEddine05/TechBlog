const AuthController = require('../Controllers/AuthController')
const express = require('express')
const router = express.Router()

router.post('/signup',AuthController.signup)

module.exports = router