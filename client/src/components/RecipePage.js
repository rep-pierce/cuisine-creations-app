import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard"
import ReviewCard from "./ReviewCard";

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
        <ReviewCard /> 
        {createRecipesCards()}
      </div>
    )
}

export default RecipePage