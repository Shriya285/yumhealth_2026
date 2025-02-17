import React from 'react';
import choclate from '../assets/img/chocolate.jpg'; // Example image import
import brownie from '../assets/img/brownie1.jpg'; // Example image import
import { useParams } from 'react-router-dom';
import './RecipeDisplay.css'; // Import CSS file for styling

const RecipeDisplay = () => {
  const { id } = useParams(); // Get the ID from URL params

  // Example recipe data
  const recipes = [
    {
      id: '1',
      title: 'Chocolate Cake',
      description:
        'This is a rich and moist chocolate cake. It only takes a few minutes to prepare the batter. Frost with your favorite chocolate frosting.',
      prepTime: '20 mins',
      cookTime: '30 mins',
      additionalTime: '30 mins',
      totalTime: '60 mins',
      ingredients: [
        '2 cups white sugar',
        '1 teaspoon salt',
        '1¼ cups all-purpose flour',
        '2 eggs',
        '¼ cup unsweetened cocoa powder',
        '1 cup milk',
        '½ cup vegetable oil',
        '1½ teaspoons baking powder',
        '1½ teaspoons baking soda',
        '2 teaspoons vanilla extract',
        '1 cup boiling water',
      ],
      directions: [
        { step: 'Step 1', description: 'Gather all ingredients.' },
        { step: 'Step 2', description: 'Preheat oven to 350 degrees Fahrenheit. Grease and flour 9-inch-round cake pans.' },
        { step: 'Step 3', description: 'In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda, and salt.' },
        { step: 'Step 4', description: 'Add the eggs, milk, oil, and vanilla. Mix for two minutes on medium speed of mixer.' },
        { step: 'Step 5', description: 'Stir in the boiling water last. Batter will be thin.' },
        { step: 'Step 6', description: 'Pour evenly into the prepared pans.' },
        { step: 'Step 7', description: 'Bake 30 to 35 minutes in preheated oven until the cake tests done with a toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.' },
        { step: 'Step 8', description: 'Enjoy.' },
      ],
      notes: {
        note: '157g',
      },
      image: choclate, // Example image
    },
    {
      id: '2',
      title: 'Brownie',
      description:
        'For years I experimented with various brownie recipes found on the internet, but none seemed to satisfy me until I finally cultivated the perfect brownie recipe. This recipe produces rich, fudgy brownies with a crackly exterior that consistently turns out well. They arre adorned with nuts, providing the brownies with an extra layer of texture.',
      prepTime: '30 mins',
      cookTime: '30 mins',
      additionalTime: '10 mins',
      totalTime: '70 mins',
      ingredients: [
        '1/4 cup  All-purpose flour',
        '1/2 cup +3/8 cup Almond flour',
        '1/2 cup+3/8 cup Walnut flour',
        '3 eggs',
        '1/2 cup white sugar',
        '1 cup brown sugar',
        '½ cup melted butter',
        '1/4-1/2 cup semi sweet chocolate',
        '1/4 cup cocoa',
        '1/2 tsp baking powder',
        '1 tsp coffee powder',
        'Almonds and Walnuts for garnish ',
      ],
      directions: [
        { step: 'Step 1', description: 'Preheat the oven to 180  Celsius and line a baking tin with parchment paper.' },
        { step: 'Step 2', description: 'Dry Ingredients: Into a bowl add the almond flour, walnut flour, 1/8 cocoa powder and baking powder. Mix it well' },
        { step: 'Step 3', description: 'Chocolate Mix: Heat up a saucepan and add the butter, semi-sweet chocolate, coffee powder, and the 1/8 cup of cocoa powder. Let the mixture come to a simmer and mix it until no lumps. Then set it aside to cool down.' },
        { step: 'Step 4', description: 'Batter: In a large mixing bowl, add the brown sugar ,white sugar and eggs. Beat the mixture using an electric hand mixer until it’s pale and fluffy. Then add the vanilla extract and salt.' },
        { step: 'Step 5', description: 'Add the chocolate mix into the batter. Mix it well.' },
        { step: 'Step 6', description: 'Now, add the dry ingredients in parts into the batter until well combined.' },
        { step: 'Step 7', description: 'Add 1/2 of the dry nuts into the batter, Then pour the batter into the baking tin, and garnish it with the remaining nuts.' },
        { step: 'Step 8', description: 'Put the tin into the oven and bake for 25-30 min.' },
        { step: 'Step 9', description: 'Check if the brownie is ready by inserting a toothpick into the center and the sides. The batter should be dry on the sides and slightly wet in the center.' },
      ],
      notes: {
        note: 'To achieve brownies with a fudgy and dense interior complemented by a crackly top, it is crucial not to overbeat the egg and sugar mixture since doing so can result in a lighter texture rather than the desired denser and fudgy consistency.',
      },
      image: brownie, // Example image
    },
    // Add more recipes as needed
  ];

  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className='recipe-display-container'>
      <div className='recipe-header'>
        <div className='recipe-header-text'>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <ul className='recipe-times'>
            <li>Prep time: {recipe.prepTime}</li>
            <li>Cook time: {recipe.cookTime}</li>
            <li>Additional time: {recipe.additionalTime}</li>
            <li>Total time: {recipe.totalTime}</li>
          </ul>
        </div>
        <div className='recipe-header-image'>
          <img src={recipe.image} alt='recipe' />
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul className='recipe-ingredients'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Directions</h2>
        {recipe.directions.map((step, index) => (
          <div key={index}>
            <h3>{step.step}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Notes</h3>
        <p>{recipe.notes.note}</p>
      </div>
    </div>
  );
};

export default RecipeDisplay;
