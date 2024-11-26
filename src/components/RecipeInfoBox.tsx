import { Recipe } from "../pages/RecipePage";

interface RecipeInfoBoxProps {
  cur: Recipe | null;
}

function RecipeInfoBox({ cur }: RecipeInfoBoxProps) {
  return (
    <div style={{ paddingLeft: "2vh", backgroundColor: "#3A3F4B" }} className="infoBox">
      {cur ? (
        <>
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
        </>
      ) : (
        <h1>No Recipe Selected.</h1>
      )}
    </div>
  );
}

export default RecipeInfoBox;
