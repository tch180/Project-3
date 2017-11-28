const express = require('express')
const router = express.Router()
const { recipeModel } = require('../db/schema')

///////////////
//INDEX
///////////////




router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
      // Find all recipes
      console.log('menu route hit')
      const recipes = await recipeModel.find({})
      // Send JSON of all recipes
      res.json(recipes)
    } catch (err) {
      res.send(err)
    }
  })
  