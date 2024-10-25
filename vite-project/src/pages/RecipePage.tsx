import NavBar from "../components/NavBar";
import RecipeData from "../data/recipeData.json";
import RecipeInfoBox from "../components/RecipeInfoBox";
import RecipeListBox from "../components/RecipeListBox";
import { useState } from "react";

export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  steps: string[];
}

function RecipePage() {
  const [cur, setCur] = useState<Recipe>(RecipeData[0]);

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
        <RecipeListBox recipes={RecipeData} cur={cur} setCur={setCur} />
        <RecipeInfoBox cur={cur} />
      </div>
    </>
  );
}

export default RecipePage;
