const deliveryModel = require('../models/delivery')

module.exports.create_delivery = async (req, res) => {
  try{
    const {regNo, vehicleType, city} = req.body
    const deliveryCheck = await deliveryModel.findOne({regNo})
    if(deliveryCheck) {
      res.status(409).json({message: 'Delivery already present'})
    } else {
      const delivery = await deliveryModel.create({regNo, vehicleType, city})
      res.status(201).json({message: 'Delivery created'})
    }
  } catch (e) {
    res.status(403).send('Error')
  }
}

module.exports.read_delivery = async (req, res) => {
  try{
    const {regNo} = req.body
    const delivery = await deliveryModel.findOne({regNo})
    if(delivery) {
      res.status(200).json({message: 'Delivery Found', regNo: delivery.regNo, vehicleType: delivery.vehicleType, city: delivery.city, activeOrdersCount: delivery.activeOrdersCount})
    } else {
        res.status(404).json({message: 'Delivery not found'})
    }
  } catch(e) {
      res.status(404).send('Error')
  }
}

module.exports.update_delivery = async (req, res) => {
  try{
    const {regNo, newRegNo, newVehicleType, newCity} = req.body
    const delivery = await deliveryModel.findOne({regNo})
    if(delivery) {
      newRegNo && (delivery.regNo = newRegNo)
      newVehicleType && (delivery.vehicleType = newVehicleType)
      newCity && (delivery.city = newCity)
      const update = await delivery.save()
      res.status(200).json({message: 'Delivery details updated', regNo: delivery.regNo, vehicleType: delivery.vehicleType, city: delivery.city})
    } else {
      res.status(404).json({message: 'Delivery not found'})
    }
  } catch(e) {
      res.status(404).send(e)
  }
}
