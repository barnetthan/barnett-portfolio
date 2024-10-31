import { useState } from "react";
import Modal from "react-modal";
import { Recipe } from "../pages/RecipePage";
import { FaTrash } from "react-icons/fa";




interface RecipeModalProps {
  modalOpen: boolean;
  setModalOpen: Function;
  recipes: Recipe[];
  setRecipes: Function;
  setCur: Function;
}

function RecipeModal({
  modalOpen,
  setModalOpen,
  recipes,
  setRecipes,
  setCur,
}: RecipeModalProps) {
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [stepInput, setStepInput] = useState<string>("");
  const [ingredientError, setIngredientError] = useState<boolean>(false);
  const [stepsError, setStepsError] = useState<boolean>(false);
  const [addError, setAddError] = useState<boolean>(false);

  function addIngredient() {
    if (ingredientInput.length > 0) {
      let arr = [...ingredients, ingredientInput];
      setIngredients(arr);
      setIngredientInput("");
      setIngredientError(false);
    } else {
      setIngredientError(true);
    }
  }

  function addStep() {
    if (stepInput.length > 0) {
      let arr = [...steps, stepInput];
      setSteps(arr);
      setStepInput("");
      setStepsError(false);
    } else {
      setStepsError(true);
    }
  }
  
  function deleteStep(i: number) {
    let arr = [...steps];
    arr.splice(i, 1);
    setSteps(arr);
  }

  function deleteIngredient(i: number) {
    let arr = [...ingredients];
    arr.splice(i, 1);
    setIngredients(arr);
  }

  function addRecipe() {
    if (title.length > 0 && ingredients.length > 0 && steps.length > 0) {
      let id = 0;
      if (recipes && recipes.length > 0) {
        id = recipes[recipes.length - 1].id + 1;
      }
      const newRecipe: Recipe = {
        id: id,
        title: title,
        ingredients: ingredients,
        steps: steps,
      };
      let arr = [...recipes, newRecipe];
      setCur(newRecipe);
      setRecipes(arr);
      localStorage.setItem("recipes", JSON.stringify(arr));
      closeModal();
    } else {
      setAddError(true);
    }
  }

  function closeModal() {
    setTitle("");
    setIngredients([]);
    setSteps([]);
    setModalOpen(false);
  }

  return (
    <Modal isOpen={modalOpen}>
      <div style={{ overflowY: "scroll" }}>
        <h1>Add New Recipe</h1>
        <div>
          <h2>Title</h2>
          Enter Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <h2>
            Ingredients (Include Quantity!)
          </h2>
          <ul>
            {ingredients.map((ing, i) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <li>{ing}</li>
                &nbsp;
                <div
                  onClick={() => {
                    deleteIngredient(i);
                  }}
                  style={{cursor: "pointer"}}
                >
                  <FaTrash/>
                </div>
              </div>
            ))}
          </ul>
          Add Ingredient:{" "}
          <input
            type="text"
            value={ingredientInput}
            onChange={(e) => {
              setIngredientInput(e.target.value);
            }}
          />
          &nbsp;
          <button style={{cursor: "pointer"}} onClick={addIngredient}>Add</button>
          {ingredientError ? (
            <div style={{ color: "red" }}>Ingredient cannot be blank.</div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <h2>Steps</h2>
          <ol>
            {steps.map((step, i) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
              <li>{step}</li>
              &nbsp;
              <div
                onClick={() => {
                  deleteStep(i);
                }}
                style={{cursor: "pointer"}}
              >
                <FaTrash />
              </div>
            </div>
            ))}
          </ol>
          Add Step:{" "}
          <input
            type="text"
            value={stepInput}
            onChange={(e) => {
              setStepInput(e.target.value);
            }}
          />
          &nbsp;
          <button style={{cursor: "pointer"}} onClick={addStep}>Add</button>
          {stepsError ? (
            <div style={{ color: "red" }}>Step cannot be blank.</div>
          ) : (
            <></>
          )}
        </div>
        <button style={{cursor: "pointer", marginTop:"10vh"}} onClick={addRecipe}>Add Recipe!</button>
        &nbsp;
        <button style={{cursor: "pointer"}} onClick={closeModal}>Cancel</button>
        {addError ? (
          <div style={{ color: "red" }}>Not all fields filled.</div>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
}

export default RecipeModal;
