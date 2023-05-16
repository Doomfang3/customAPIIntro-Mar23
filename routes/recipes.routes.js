const Recipe = require('../models/Recipe.model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find()
    res.status(200).json(allRecipes)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:recipeId', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId)
    res.status(200).json(recipe)
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  const payload = req.body
  try {
    const newRecipe = await Recipe.create(payload)
    res.status(201).json(newRecipe)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:recipeId', async (req, res) => {
  const { recipeId } = req.params
  const payload = req.body
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, payload, { new: true })
    res.status(200).json(updatedRecipe)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:recipeId', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.recipeId)
    res.status(200).json({ message: 'Recipe succesfully deleted' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
