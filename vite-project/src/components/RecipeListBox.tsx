import { useState, useEffect } from "react";
import "../styles/Recipes.css";
import { Recipe } from "../pages/RecipePage";
import RecipeListItem from "./RecipeListItem";

interface RecipeListBoxProps {
  recipes: Recipe[];
  setCur: Function;
  cur: Recipe;
}

function RecipeListBox({ recipes, setCur, cur }: RecipeListBoxProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFaves, setShowFaves] = useState<boolean>(false);
  const [faveIds, setFaveIds] = useState<number[]>([]);

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

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "-3vh",
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
          &nbsp; &nbsp;
          <button
            onClick={() => {
              setShowFaves(!showFaves);
            }}
          >
            {showFaves ? <>Show All</> : <>Show Favorites Only</>}
          </button>
          &nbsp; &nbsp;
          <button onClick={clearFaves} disabled={faveIds.length == 0}>
            Clear All Favorites ({faveIds.length})
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
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default RecipeListBox;
