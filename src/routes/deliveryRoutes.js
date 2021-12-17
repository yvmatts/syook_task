const {Router} = require('express')
const deliveryController = require('../controllers/deliveryController')
const deliveryRouter = Router()

deliveryRouter.post('/create', deliveryController.create_delivery)
deliveryRouter.post('/read', deliveryController.read_delivery)
deliveryRouter.post('/update', deliveryController.update_delivery)

module.exports = deliveryRouter
