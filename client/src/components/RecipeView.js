import React, {useEffect, useState} from "react";
import StepCard from "./StepCard";

function RecipeView({currentUser, recipeID, setRecipeID}) {
    const [recipe, setRecipe] = useState({})

    useEffect(()=> {
        fetch(`/recipes/${recipeID}`)
        .then(r => r.json())
        .then(setRecipe)
    }, [])

    // function createStepCards(){
    //     return recipe.steps.map(step => <StepCard key={recipe.id} recipe={recipe} setRecipeID={setRecipeID}/>)
    // }

    return (
      <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />
        {/* <p>Created By: {recipe.user.username}</p> */}
        {/* {createStepCards()} */}
        {/* {currentUser.id === recipe.user.id ? <button>Delete Recipe</button> : null } */}
      </div>
    )
}   

export default RecipeView