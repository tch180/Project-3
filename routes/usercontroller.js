const express = require('express')
const router = express.Router()
const { usersModel } = require('../db/schema')

///////////////
//INDEX
///////////////
router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
      // Find all users
      const users = await usersModel.find({})
      // Send JSON of all users
      res.json(users)
    } catch (err) {
      res.send(err)
    }
  })



  router.get('/:id', async (req, res)=>{
    try {
      console.log('route hit with id ' + req.params.id)
      const user = await usersModel.findById(req.params.id)
      res.json(user)
    } catch (err){
      res.send(err)
    }
  })
///////////////
//Patch
///////////////
  router.patch('/:id', async (req,res)=>{
    const updatedUser = req.body.users
    console.log(req.params.id)
    const user = await usersModel.findById(req.params.id)
    user.name = updatedUser.name
    user.phoneNumber = updatedUser.phoneNumber
    user.email = updatedUser.email
    user.address = updatedUser.address
    const saved = await user.save()
    res.json(saved)
  })
  ///////////////
  //Create
  ///////////////
  router.post('/', async (req, res)=> {
    try {
      const newUser= new usersModel(req.body.user)
      const saved = await newUser.save()
      res.json(saved)
    }catch (err){
      res.send(err)
    }
  })






///////////////
//Delete
///////////////

router.delete('/:id', async (req, res) => {
  // Find the user
  try{
    console.log(req.params.id)
  const user = await usersModel.findByIdAndRemove(req.params.id)
  // Find the specific idea and remove it from the array
 
  res.json('saved')
  } catch (error) {
    res.send(error)
  }
})

  module.exports = router