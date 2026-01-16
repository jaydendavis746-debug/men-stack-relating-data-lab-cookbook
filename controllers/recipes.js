// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');
const Ingredient = require('../models/ingredient.js');


// router logic will go here - will be built later on in the lab

router.get('/', async (req, res) => {
    const getAllRecipes = await Recipe.find({}).populate('author');
    console.log(getAllRecipes)
  res.render('recipes/index.ejs' , {recipes : getAllRecipes});
});

router.get('/new', async (req, res)=>{
     const ingredients = await Ingredient.find().sort({ name: 1 })
    res.render('recipes/new.ejs', { ingredients})
   
})

router.post('/', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    newRecipe.author = req.session.user._id;
    await newRecipe.save();
    res.redirect('/')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});


router.get('/:recipeId', async (req, res) => {
    const recipeId = req.params.recipeId
    const getAllRecipes = await Recipe.findById(recipeId).populate('author');
    res.render('recipes/show.ejs',{recipe: getAllRecipes}  );

})



router.delete('/:recipeId', async (req, res)=>{
    
        
        const recipe = await Recipe.findById(req.params.recipeId);
        if(recipe.author._id.equals(req.session.user._id)){
            console.log('permission granted')
            await Recipe.deleteOne();
            res.redirect('/recipes')
        }else {
            res.send('You do not have the permission to delete this listing')
    }

})


router.get('/:recipeId/edit', async (req, res) =>{
        const currentRecipe = await Recipe.findById(req.params.recipeId)//.populate('ingredientsList.ingredient')
        const currentIngredients = await Ingredient.find().sort({ name: 1 })
        res.render('recipes/edit.ejs',{ recipe: currentRecipe, ingredients: currentIngredients })

});

router.put('/:recipeId', async (req, res) => {

    const currentRecipe = await Recipe.findById(req.params.recipeId);
    if (currentRecipe.author._id.equals(req.session.user._id)) {
      await currentRecipe.updateOne(req.body);
      res.redirect('/recipes');
    } else {
      res.send("You don't have permission to do that.");
    }
  
});




module.exports = router;
