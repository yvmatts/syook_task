const {Router} = require('express')
const itemController = require('../controllers/itemController')
const itemRouter = Router()

itemRouter.post('/create', itemController.create_item)
itemRouter.post('/read', itemController.read_item)
itemRouter.post('/update', itemController.update_item)

module.exports = itemRouter
