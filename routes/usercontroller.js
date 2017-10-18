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
  //post
  ///////////////

router.post('/', async (req,res)=> {
  try {
  const updateUser = new user (req.body.user)
  const saved = await updateUser.save()
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
  const user = await user.findById(req.params.userId)
  // Find the specific idea and remove it from the array
  user.id(req.params.id).remove()
  // Save the updated user
  const saved = await user.save()
  // Send the user object
  res.json(saved)
})

  module.exports = router