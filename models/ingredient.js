const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({

   name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },

  category: {
    type: String,
    enum: [
      "vegetable",
      "fruit",
      "meat",
      "seafood",
      "dairy",
      "grain",
      "spice",
      "herb",
      "other"
    ],
    default: "other"
  }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient