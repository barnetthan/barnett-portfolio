import { Recipe } from "../pages/RecipePage";
import "../styles/Recipes.css";
import { FaRegStar, FaStar } from "react-icons/fa"; // Font Awesome

interface RecipeListItemProps {
  recipe: Recipe;
  faveIds: number[];
  setFaveIds: Function;
  setCur: Function;
  cur: Recipe | null;
  recipes: Recipe[];
  setRecipes: Function;
}

function RecipeListItem({
  recipe,
  faveIds,
  setFaveIds,
  setCur,
  cur,
  recipes,
  setRecipes,
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

  function handleDelete() {
    if (
      window.confirm(
        `Are you sure you want to delete ${recipe.title}? THIS IS UNREVERSIBLE!`
      )
    ) {
      let arr = [...faveIds];
      if (arr.includes(recipe.id)) {
        arr.splice(arr.indexOf(recipe.id), 1);
      }
      setFaveIds(arr);
      localStorage.setItem("faves", JSON.stringify(arr));

      let arr2 = [...recipes];
      arr2.splice(arr2.indexOf(recipe), 1);
      setRecipes(arr2);
      localStorage.setItem("recipes", JSON.stringify(arr2));
      setCur(null);
    }
  }

  return (
    <div
      className="listItem"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: cur && cur.id == recipe.id ? "lightgray" : "white",
      }}
    >
      <div
        style={{ fontWeight: cur && cur.id == recipe.id ? "bolder" : "normal" }}
      >
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
        <button style={{ cursor: "pointer" }} onClick={handleDelete}>
          Delete
        </button>
        &nbsp;
        <button
          style={{ cursor: "pointer" }}
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
