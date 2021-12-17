const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  }
})

const itemModel = mongoose.model('items', itemSchema)
module.exports = itemModel
