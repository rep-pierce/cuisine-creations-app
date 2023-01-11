import React, {useEffect} from "react";
import RecipeCard from "./RecipeCard"




function RecipePage({recipes, setRecipes, rID, setRID, favs, setFavs, currentUser}) {
   
    
    useEffect(()=> {
        fetch("/recipes")
        .then(r => r.json())
        .then(setRecipes)
    }, [])

    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={Math.random()*1000000} favs={favs} setFavs={setFavs} recipe={recipe} rID={rID} setRID={setRID} currentUser={currentUser}/>)
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