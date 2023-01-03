import React from 'react'

function RecipeCard({recipe}) {
  return (
    <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name}/>
        <h2>{recipe.recipe_time}</h2>
        <p>{recipe.tags}</p>
        <p>Created by: {recipe.user.name}</p>
    </div>
  )
}

export default RecipeCard