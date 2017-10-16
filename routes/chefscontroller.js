const express = require('express')
const router = express.Router()
const chef  = require('../db/schema')



router.get('/', async (req, res) => {
  try {
    const chef = await chef.find({})
    res.json(chef)
  } catch (err) {
    res.send(err)
  }
})
router.get('/:id', async (req, res) => {
  try {
    const chef = await chef.findById(req.params.id)
    res.json(chef)
  } catch (err) {
    res.send(err)
  }
})
router.post('/', async (req, res) => {
  try {
    const newchef = new chef(req.body.chef)
    const saved = await newchef.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})
module.exports = router