import NavBar from "../components/NavBar";
import Data from "../data/recipeData.json";
import RecipeInfoBox from "../components/RecipeInfoBox";
import RecipeListBox from "../components/RecipeListBox";
import { useEffect, useState } from "react";

export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
}

function RecipePage() {
  const [cur, setCur] = useState<Recipe | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>(Data);

  useEffect(() => {
    if (localStorage.getItem("recipes")) {
      setRecipes(JSON.parse(localStorage.getItem("recipes")!));
      setCur(JSON.parse(localStorage.getItem("recipes")!)[0]);
    }
  }, []);

  return (
    <>
      <NavBar curPage="recipe" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "underline",
        }}
      >
        <h1>Recipe Central</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <RecipeListBox recipes={recipes} setRecipes={setRecipes} cur={cur} setCur={setCur} />
        <RecipeInfoBox cur={cur} />
      </div>
    </>
  );
}

export default RecipePage;
