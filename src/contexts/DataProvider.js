import React, { createContext, useContext, useReducer } from "react";
import { recipesData } from "../data/recipesData";

const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((recipe) => recipe.id !== action.payload);
    case "ADD":
      return [{ ...action.payload }, ...state];
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const addedRecipe = JSON.parse(localStorage.getItem("recipe"));
  const initialRecipes = addedRecipe
    ? [{ ...addedRecipe }, ...recipesData]
    : recipesData;

  const [recipes, dispatch] = useReducer(reducer, initialRecipes);
  return (
    <DataContext.Provider value={{ dispatch, recipes }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
