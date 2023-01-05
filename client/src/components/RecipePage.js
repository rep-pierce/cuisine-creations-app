import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard"


function RecipePage({recipes, setRecipes, currentUser}) {
   
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
    }

  return (
      <>
        <h1 className="font-effect"> Cuisine Creations </h1>
      <div className="recipe-page">
        {createRecipesCards()}
      </div>
      </>
    )
}

export default RecipePage