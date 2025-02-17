// // /backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/recipes', { useNewUrlParser: true, useUnifiedTopology: true });

// const recipeSchema = new mongoose.Schema({
//   title: String,
//   ingredients: String,
//   instructions: String,
//   rating: Number,
// });

// const Recipe = mongoose.model('Recipe', recipeSchema);

// app.post('/api/recipes', async (req, res) => {
//   const { title, ingredients, instructions, rating } = req.body;
//   const recipe = new Recipe({ title, ingredients, instructions, rating });
//   await recipe.save();
//   res.send(recipe);
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

// server.js

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.get('/api/recipes', (req, res) => {
  // Replace with actual logic to fetch recipes from your database or any data source
  const recipes = [
    { id: 1, title: 'Recipe 1', rating: 4, image: 'path_to_image' },
    { id: 2, title: 'Recipe 2', rating: 4, image: 'path_to_image' },
    // Add more recipes as needed
  ];
  res.json(recipes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
