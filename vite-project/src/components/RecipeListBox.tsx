import { useState, useEffect } from "react";
import "../styles/Recipes.css";
import { Recipe } from "../pages/RecipePage";
import RecipeListItem from "./RecipeListItem";
import Data from "../data/recipeData.json";
import RecipeModal from "./RecipeModal";

interface RecipeListBoxProps {
  recipes: Recipe[];
  setRecipes: Function;
  setCur: Function;
  cur: Recipe | null;
}

function RecipeListBox({
  recipes,
  setRecipes,
  setCur,
  cur,
}: RecipeListBoxProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFaves, setShowFaves] = useState<boolean>(false);
  const [faveIds, setFaveIds] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("faves")) {
      setFaveIds(JSON.parse(localStorage.getItem("faves")!));
    }
  }, []);

  function clearFaves() {
    if (
      window.confirm("Are you sure you want to delete all favorite recipes?")
    ) {
      setFaveIds([]);
      localStorage.removeItem("faves");
    }
  }

  function restoreRecipes() {
    setRecipes(Data);
    localStorage.setItem("recipes", JSON.stringify(Data));
  }

  return (
    <>
      <RecipeModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        recipes={recipes}
        setRecipes={setRecipes}
        setCur={setCur}
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <b>Search Recipes</b>&nbsp;
          <input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "-3vh",
            marginTop: "1vh",
          }}
        >
          &nbsp; &nbsp;
          <button style={{ cursor: "pointer" }} onClick={restoreRecipes}>
            Restore All Recipes
          </button>
          &nbsp; &nbsp;
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowFaves(!showFaves);
            }}
          >
            {showFaves ? <>Show All</> : <>Show Favorites Only</>}
          </button>
          &nbsp; &nbsp;
          <button
            style={{ cursor: "pointer" }}
            onClick={clearFaves}
            disabled={faveIds.length == 0}
          >
            Clear All Favorites ({faveIds.length})
          </button>
          &nbsp; &nbsp;
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Add Recipe
          </button>
        </div>
        <div className="listBox">
          {recipes
            .filter((r) => {
              if (
                searchQuery == "" ||
                r.title.toLowerCase().includes(searchQuery)
              ) {
                if (!showFaves || faveIds.includes(r.id)) {
                  return r;
                }
              }
            })
            .map((r) => (
              <RecipeListItem
                recipe={r}
                faveIds={faveIds}
                setFaveIds={setFaveIds}
                setCur={setCur}
                cur={cur}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default RecipeListBox;
