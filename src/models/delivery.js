const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema({
    regNo: {
      type: String,
      unique: true,
      required: true,
      match: '/^[0-9A-Za-z]+$/gm'
    },
    vehicleType: {
      type: String,
      enum: {
        ['BIKE', 'TRUCK'],
        message: 'Type must be either Bike or Truck'
      },
      required: true
    },
    city: {
      type: [Number],
      required: true
    },
    activeOrdersCount: {
      type: Number,
      default: 0,
      required: true
    }
})

const deliveryModel = mongoose.model('delivery', deliverySchema)
module.exports = deliveryModel
