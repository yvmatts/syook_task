const {Router} = require('express')
const authController = require('../controllers/authController')
const authRouter = Router()

authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)

module.exports = authRouter
