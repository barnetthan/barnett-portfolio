import { Recipe } from "../pages/RecipePage";
import "../styles/Recipes.css";
import { FaRegStar, FaStar } from "react-icons/fa"; // Font Awesome

interface RecipeListItemProps {
  recipe: Recipe;
  faveIds: number[];
  setFaveIds: Function;
  setCur: Function;
  cur: Recipe;
}

function RecipeListItem({
  recipe,
  faveIds,
  setFaveIds,
  setCur,
  cur,
}: RecipeListItemProps) {
  function handleFavorite() {
    let arr = [...faveIds];
    if (!arr.includes(recipe.id)) {
      arr.push(recipe.id);
    } else {
      arr.splice(arr.indexOf(recipe.id), 1);
    }
    setFaveIds(arr);
    localStorage.setItem("faves", JSON.stringify(arr));
  }

  return (
    <div
      className="listItem"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: cur.id == recipe.id ? "lightgray" : "white",
      }}
    >
      <div style={{ fontWeight: cur.id == recipe.id ? "bolder" : "normal" }}>
        {recipe.title}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
      >
        <div
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={handleFavorite}
        >
          {faveIds.includes(recipe.id) ? <FaStar /> : <FaRegStar />}
        </div>
        <button
          onClick={() => {
            setCur(recipe);
          }}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default RecipeListItem;
