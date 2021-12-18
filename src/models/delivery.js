const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema({
    regNo: {
      type: String,
      unique: true,
      required: true
    },
    vehicleType: {
      type: String,
      enum: ['BIKE', 'TRUCK'],
      required: true
    },
    city: {
      type: String,
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
