const {Router} = require('express')
const orderController = require('../controllers/orderController')
const { requireAuth } = require('../middleware/authMiddleware')
const orderRouter = Router()

orderRouter.post('/create', requireAuth, orderController.create_order)
orderRouter.post('/update', requireAuth, orderController.update_order)


module.exports = orderRouter
