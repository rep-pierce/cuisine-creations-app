import React from 'react'
import { useHistory } from "react-router-dom";

function RecipeCard({recipe, currentUser}) {
  const history = useHistory()
  function handleNav(){
    history.push(`/recipe/${recipe.id}`)
  }
  function handleFav(){
    currentUser.favorite_recipes.includes(recipe) ? <button>Remove from Favorites</button> : <button>Add to Favorites</button>
  }
  return (
    <>
    <div className='recipes' onClick={handleNav}>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name}/>
        <h2>{recipe.recipe_time}</h2>
        <p>{recipe.tags}</p>
      { !recipe.user ?  null : <p>Created by: {recipe.user.name}</p>}
      { !currentUser ? null : handleFav()}
    </div>
    <br/>
    </>
  )
}

export default RecipeCard