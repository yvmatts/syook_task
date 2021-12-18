const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const itemRoutes = require('./routes/itemRoutes')
const deliveryRoutes = require('./routes/deliveryRoutes')
const orderRoutes = require('./routes/orderRoutes')
const cookieParser = require('cookie-parser')
const conf = require('./conf')
const cors = require('cors')

const port = process.env.PORT || 8000
const app = express()

app.use(express.static('build'));
app.use(cors())
app.use(cookieParser())
app.use(express.json())

var connection = mongoose.connect(conf.dbURI)
  .then((result) => {
    console.log('Listening', __dirname)
    app.listen(port)
  })
  .catch((err) => console.log(err))

app.use('/', authRoutes)
app.use('/item',itemRoutes)
app.use('/delivery', deliveryRoutes)
app.use('/order',orderRoutes)

module.exports = connection
