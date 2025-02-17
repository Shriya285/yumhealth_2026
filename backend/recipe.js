// backend/recipes.js

const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); // Adjust path based on your project structure

// POST route to add a new recipe
router.post('/recipes', async (req, res) => {
  try {
    const { imgSrc, title, rating } = req.body; // Extract data from request body
    
    // Create a new recipe document
    const newRecipe = new Recipe({
      imgSrc,
      title,
      rating,
    });

    // Save the new recipe to the database
    await newRecipe.save();

    res.status(201).json(newRecipe); // Respond with the newly created recipe
  } catch (err) {
    console.error('Error adding recipe:', err);
    res.status(500).json({ message: 'Failed to add recipe.' });
  }
});

module.exports = router;
