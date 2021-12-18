const jwt = require('jsonwebtoken')
const customerModel = require('../models/customer')
const conf = require('../conf')

const maxAge = 3 * 60 * 60
const createToken = (id, city) => {
  return jwt.sign({"id":id, "city": city }, conf.secretKey, {
    expiresIn: maxAge
  })
}

module.exports.login = async (req, res) => {
  try {
    const {cName, cCity} = req.body
    const customer = await customerModel.findOne({cName})
    if(!customer) {
      customer = await customerModel.create({name:cName, city: cCity})
    }
    const token = createToken(customer._id, customer.city)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(201).json({message: 'Authentication done'})
  } catch (e) {

  }
}

module.exports.logout = async (req, res) => {
  try {
      res.cookie('jwt','', {maxAge: 1})
      res.status(201).json({message: 'Logged out'})
  } catch (e) {

  }
}
