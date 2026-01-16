const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },

    cuisine: String,

    cookTime:{ 
        type: Number,
        required: true,
          min: 0,
    },

    difficulty:{
        type: String,
        enum: ['easy', 'medium', 'hard'],
    },
    prepTime:{
        type: Number,
        required: true,
        min: 0,
},

    servings: Number,

    description:{
        type: String,
        required: true,
    },

    steps:[{
        order: Number,
        instruction: String,
    },
],    

ingredientsList:[{
    ingredient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Ingredient',
        required: true,
    },
    quantity:Number,

    size: {
       type: String,
       enum: ['Small', 'Medium', 'Large'], 

    },

    unit: {
        type: String,
        enum:['g', 'ml', 'cup', 'tbsp', 'tsp', 'lb', 'pint', ],


    },
}],

author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},



});

const Recipe = mongoose.model('Recipe' , recipeSchema);

module.exports = Recipe