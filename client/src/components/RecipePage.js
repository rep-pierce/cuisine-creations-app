import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import RecipeCard from "./RecipeCard"

function RecipePage({currentUser, setCurrentUser}) {
    const [recipes, setRecipes] = useState([])
    const history = useHistory()
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function handleClick(){
      history.push('/userlogin')
    }

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    }

    return (
      <div>


        {createRecipesCards()}
      </div>
    )
}

export default RecipePage