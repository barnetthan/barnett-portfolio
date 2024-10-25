import { useState } from "react";
import { Recipe } from "../pages/RecipePage";

interface RecipeInfoBoxProps {
  cur: Recipe;
}

function RecipeInfoBox({ cur }: RecipeInfoBoxProps) {
  return (
    <div style={{ paddingLeft: "2vh" }} className="infoBox">
      <div>
        <h1>{cur.title}</h1>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {cur.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Steps</h2>
        <ol>
          {cur.steps.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeInfoBox;
