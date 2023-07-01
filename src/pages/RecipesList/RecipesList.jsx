import "./RecipesList.css";
import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useData } from "../../contexts/DataProvider";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { v4 as uuid } from "uuid";

export const RecipesList = () => {
  const [filterBy, setFilterBy] = useState("recipeName");
  const [searchedValue, setSearchedValue] = useState("");
  const { recipes, dispatch } = useData();
  const [showModal, setShowModal] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    id: uuid(),
    recipeName: "",
    ingredients: [],
    cookingInstructions: "",
    cuisineType: "",
    url: "https://picsum.photos/212/312",
  });

  const sortedRecipes = !searchedValue
    ? recipes
    : recipes.filter((recipe) =>
        filterBy !== "ingredients"
          ? recipe[filterBy]
              .toUpperCase()
              ?.includes(searchedValue?.toUpperCase())
          : recipe[filterBy]
              ?.join("")
              ?.toUpperCase()
              ?.includes(searchedValue?.toUpperCase())
      );
  return (
    <>
      <SearchBar
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />

      <h1 className="recipe-header">All Recipes:</h1>
      {sortedRecipes.length ? (
        <div className="all-recipes-container">
          {sortedRecipes?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add new Recipe
          </button>
        </div>
      ) : (
        <p>No such recipees found</p>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content-container">
            <h3>Create New Recipe</h3>
            <label>
              <input
                onChange={(e) => {
                  setNewRecipe({ ...newRecipe, recipeName: e.target.value });
                }}
                value={newRecipe?.recipeName}
                placeholder="Enter recipe name"
              ></input>
            </label>
            <label>
              <input
                onChange={(e) => {
                  setNewRecipe({ ...newRecipe, ingredients: [e.target.value] });
                }}
                value={newRecipe?.ingredients}
                placeholder="Enter recipe ingredient"
              ></input>
            </label>
            <label>
              <input
                onChange={(e) => {
                  setNewRecipe({
                    ...newRecipe,
                    cookingInstructions: e.target.value,
                  });
                }}
                value={newRecipe?.cookingInstructions}
                placeholder="Enter recipe instruction"
              ></input>
            </label>
            <label>
              <input
                onChange={(e) => {
                  setNewRecipe({ ...newRecipe, cuisineType: e.target.value });
                }}
                value={newRecipe?.cuisineType}
                placeholder="Enter recipe type"
              ></input>
            </label>

            <button
              onClick={() => {
                dispatch({ type: "ADD", payload: newRecipe });
                localStorage.setItem("recipe", JSON.stringify(newRecipe));
                setShowModal(false);
              }}
            >
              Add
            </button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
