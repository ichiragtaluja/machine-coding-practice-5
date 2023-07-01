import "./RecipeDetail.css";
import React from "react";
import { useData } from "../../contexts/DataProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes } = useData();

  const selectedRecipe = recipes?.find((recipe) => recipe?.id === id);
  return (
    <>
      <Link to="/">Back to Home</Link>
      <div className="recipe-detail-container">
        <h1>{selectedRecipe?.recipeName}</h1>
        <div className="detail-card">
          <div className="detail-image-container">
            <img src={selectedRecipe?.url} />
          </div>
          <div className="detail-description-container">
            <h3>Cuisine: {selectedRecipe?.cuisineType}</h3>
            <div>
              <span className="bold">Ingredients: </span>
              <span>
                {selectedRecipe?.ingredients.map((ingredient) => ingredient)}
              </span>
            </div>
            <div>
              <span className="bold">Instructions: </span>
              <span>{selectedRecipe?.cookingInstructions}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* id: uuid(),
    recipeName: "Chicken Tikka Masala",
    ingredients: [
      "500g boneless, skinless chicken breasts, cut into bite-sized pieces",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 tablespoon ginger paste",
      "2 tablespoons tikka masala paste",
      "1 cup tomato puree",
      "1 cup heavy cream",
      "1 teaspoon garam masala",
      "Salt to taste",
      "Fresh cilantro, for garnish",
    ],
    cookingInstructions: "1. In a large bowl, combine yogurt, lemon juice...",
    url: "https://picsum.photos/200/300",
    cuisineType: "Indian", */
}
