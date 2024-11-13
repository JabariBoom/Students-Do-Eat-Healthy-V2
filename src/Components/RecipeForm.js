import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe({ title, ingredients, directions, image });
    setTitle('');
    setIngredients('');
    setDirections('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-form">
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Directions"
        value={directions}
        onChange={(e) => setDirections(e.target.value)}
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
