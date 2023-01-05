import React from 'react'
import { useHistory } from "react-router-dom";

function RecipeCard({recipe}) {
  const history = useHistory()
  function handleNav(){
    history.push(`/recipe/${recipe.id}`)
  }
  return (
    <>
    <div className='recipes' onClick={handleNav}>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name}/>
        <h2>{recipe.recipe_time}</h2>
        <p>{recipe.tags}</p>
      { !recipe.user ?  null : <p>Created by: {recipe.user.name}</p>}
    </div>
    <br/>
    </>
  )
}

export default RecipeCard