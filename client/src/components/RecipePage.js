import React, {useEffect, useState} from "react";
// import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard"

function RecipePage() {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}

    return (
      <div>
        {createRecipesCards()}
      </div>
    )
}

export default RecipePage