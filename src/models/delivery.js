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
deliverySchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
})

const deliveryModel = mongoose.model('delivery', deliverySchema)
module.exports = deliveryModel
