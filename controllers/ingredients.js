// controllers/recipes.js
const express = require("express");
const router = express.Router();
const Ingredient = require("../models/ingredient.js");


// ----------------------------
// GET all ingredients
// ----------------------------
router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find().sort({ name: 1 });
    res.render("ingredients/index.ejs", { ingredients });
  } catch (err) {
    res.status(500).send("Error loading ingredients");
  }
});


// ----------------------------
// GET new ingredient form
// ----------------------------
router.get("/new", (req, res) => {
  res.render("ingredients/new.ejs");
});


// ----------------------------
// POST create ingredient
// ----------------------------
router.post("/", async (req, res) => {
  try {
    await Ingredient.create(req.body);

    res.redirect("/ingredients");
  } catch (error) {
    console.log(error)
  }
});


// ----------------------------
// DELETE ingredient
// ----------------------------
router.delete("/:id", async (req, res) => {
  try {
    await Ingredient.findByIdAndDelete(req.params.id);
    res.redirect("/ingredients");
  } catch (err) {
    res.status(400).send("Error deleting ingredient");
  }
});

module.exports = router;

