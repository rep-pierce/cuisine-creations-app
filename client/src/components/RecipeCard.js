import React from 'react'
import { useHistory } from "react-router-dom";

function RecipeCard({recipe, setRecipeID}) {
  const history = useHistory()
  function handleNav(){
    setRecipeID(recipe.id)
    history.push('/recipe')
  }
  return (
    <div onClick={handleNav}>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name}/>
        <h2>{recipe.recipe_time}</h2>
        <p>{recipe.tags}</p>
        <p>Created by: {recipe.user.name}</p>
    </div>
  )
}

export default RecipeCard