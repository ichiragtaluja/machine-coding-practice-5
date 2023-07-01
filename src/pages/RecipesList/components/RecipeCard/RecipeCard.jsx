import "./RecipeCard.css";

import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../../contexts/DataProvider";

export const RecipeCard = ({ recipe }) => {
  const { dispatch } = useData();
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe?.url} />
      </div>
      <div className="recipe-name-container">
        <h3>{recipe?.recipeName}</h3>
      </div>
      <div className="recipe-cuisine-type-container">
        <span className="bold">Cuisine Type:</span>
        <span>{recipe?.cuisineType}</span>
      </div>
      <div className="recipe-ingredients-container">
        <span className="bold">Ingredients:</span>
        <span>
          <Link to={`/recipedetail/${recipe?.id}`}>See recipe</Link>
        </span>
      </div>
      <div className="recipe-instructions-container">
        <span className="bold">Instructions:</span>
        <span>
          <Link to={`/recipedetail/${recipe?.id}`}>See recipe</Link>
        </span>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "DELETE", payload: recipe.id });
        }}
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};
