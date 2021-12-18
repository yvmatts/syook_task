const itemModel = require('../models/items')

module.exports.create_item = async (req,res) => {
   try{
    const {name, price} = req.body
    const itemCheck = await itemModel.findOne({name})
    if(itemCheck) {
      res.status(409).json({message: 'Item already present'})
    } else {
      const item = await itemModel.create({name: name, price:price})
      res.status(201).json({message: 'Item created'})
    }
  } catch (e) {
    res.status(403).send('Error')
  }
}

module.exports.read_item = async (req, res) => {
  try{
    const {name} = req.body
    const item = await itemModel.findOne({name})
    if(item) {
      res.status(200).json({message: 'Item Found', itemName: item.name, itemPrice:item.price})
    } else {
        res.status(404).json({message: 'Item not found'})
    }
  } catch(e) {
      res.status(404).send('Error')
  }
}

module.exports.update_item = async (req, res) => {
  try{
    const {name, newName, newPrice} = req.body
    const item = await itemModel.findOne({name})
    if(item) {
      newName && (item.name = newName)
      newPrice && (item.price = newPrice)
      const update = await item.save()
      res.status(200).json({message: 'Item details updated', itemName: item.name, itemPrice:item.price})
    } else {
      res.status(404).json({message: 'Item not found'})
    }
  } catch(e) {
      res.status(404).send('Error')
  }
}
