const { Schema, model } = require('mongoose')

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: Number,
      required: false,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    type: {
      type: String,
      enum: ['Omnivore', 'Vegetarian', 'Vegan'],
      default: 'Omnivore',
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe
