const AuthController = require('../Controllers/AuthController')
const express = require('express')
const router = express.Router()

router.post('/signup',AuthController.signup)
router.post('/login',AuthController.login)


module.exports = router