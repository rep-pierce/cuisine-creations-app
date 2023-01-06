import React, {useEffect} from "react";
import RecipeCard from "./RecipeCard"
import StarRating from "./StarRating";



function RecipePage({recipes, setRecipes, currentUser, rID, setRID}) {
   
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} rID={rID} setRID={setRID}/>)
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