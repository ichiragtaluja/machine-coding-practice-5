import "./App.css";
import { useData } from "./contexts/DataProvider";
import { Route, Routes } from "react-router-dom";
import { RecipesList } from "./pages/RecipesList/RecipesList";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";

function App() {
  const { val } = useData();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/recipedetail/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
