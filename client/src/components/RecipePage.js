import React, {useEffect, useState} from "react";
import RecipeCard from "./RecipeCard"
import ReviewCard from "./ReviewCard";

function RecipePage() {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    }

    return (
      <div>
        <ReviewCard /> 
        {createRecipesCards()}
      </div>
    )
}

export default RecipePage