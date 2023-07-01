import "./SearchBar.css";

import React, { useState } from "react";

export const SearchBar = ({
  filterBy,
  setFilterBy,
  searchedValue,
  setSearchedValue,
}) => {
  return (
    <div className="searchbar-container">
      <input
        value={searchedValue}
        placeholder="Serch All the items you want"
        className="searchbar"
        onChange={(e) => setSearchedValue(e.target.value)}
      />
      <div className="filters-container">
        <h3>Filters</h3>
        <div className="input-container">
          <label>
            <input
              onClick={(e) => setFilterBy(e.target.value)}
              value="recipeName"
              checked={filterBy === "recipeName"}
              name="recipe"
              type="radio"
            ></input>
            Name
          </label>
          <label>
            <input
              onClick={(e) => setFilterBy(e.target.value)}
              value="ingredients"
              checked={filterBy === "ingredients"}
              name="recipe"
              type="radio"
            ></input>
            Ingredients
          </label>
          <label>
            <input
              onClick={(e) => setFilterBy(e.target.value)}
              value="cuisineType"
              checked={filterBy === "cuisineType"}
              name="recipe"
              type="radio"
            ></input>
            Cuisine
          </label>
        </div>
      </div>
    </div>
  );
};
