const orderModel = require('../models/orders')
const itemModel = require('../models/items')
const deliveryModel = require('../models/delivery')
const jwt_decode = require('jwt-decode')

async function assignVehicle(city) {
  var vehicleList = await deliveryModel.find({city})
  const finalList = vehicleList.filter((delivery) => {
    return delivery.activeOrdersCount < 2
  })
  if(vehicleList.length > 0) {
    return finalList[0]
  } else {
    return false
  }
}

module.exports.create_order = async (req,res) => {
    try {
        const customerId = jwt_decode(req.cookies.jwt).id
        const customerCity = jwt_decode(req.cookies.jwt).city
        const {itemName} = req.body
        //get item from items collection
        var assignedItem = await itemModel.findOne({name: itemName})
        //assign deliveryVehicle
        var assignedVehicle = await assignVehicle(customerCity)

        if(!assignedVehicle || !assignedItem) {
          throw('Item or Vehicle not found')
        } else {
          const order = await orderModel.create({itemId: assignedItem._id, price: assignedItem.price, customerId: customerId, deliveryId: assignedVehicle._id})
          const delivery = await deliveryModel.findOneAndUpdate({_id: assignedVehicle._id}, {activeOrdersCount: assignedVehicle.activeOrdersCount + 1}, {new:true})
          res.status(201).json({message: 'Order created'})
        }
    } catch (e) {
      res.status(404).json({message: e})
    }
}

module.exports.update_order = async (req, res) => {
  try {
    const {orderNo} = req.body
    const order = await orderModel.findOne({orderNo})
    if(order) {
      order.isDelivered = !order.isDelivered
      const orderUpdate = await order.save()
      const delivery = await deliveryModel.findOne({_id: order.deliveryId})
      orderUpdate.isDelivered && (delivery.activeOrdersCount -= 1)
      !orderUpdate.isDelivered && (delivery.activeOrdersCount += 1)
      const deliveryUpdate = await delivery.save()
      res.status(201).json({message: 'Order Delivery status updated'})
    } else {
      res.status(404).json({message: 'Order not found'})
    }
  } catch (e) {

  }
}
