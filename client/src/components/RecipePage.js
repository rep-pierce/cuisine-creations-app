import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard"

function RecipePage({setRecipeID}) {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} setRecipeID={setRecipeID}/>)
    }

    return (
      <div>
        {createRecipesCards()}
      </div>
    )
}

export default RecipePage