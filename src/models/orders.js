const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const orderSchema = new mongoose.Schema({
  orderNo: {
    type: Number,
    required: true,
    unique: true,
    default:0
  },
  itemId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  deliveryId: {
    type: String,
    required: true
  },
  isDelivered: {
    type: Boolean,
    default: false,
    required: true
  }
})

orderSchema.pre('save', async function(next) {
    if(!this.orderNo){
      const index = await this.constructor.count()
      this.orderNo = index + 1
    }
    next()
  })

const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel
