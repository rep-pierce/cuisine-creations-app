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
      history.push('/login')
    }


    function createRecipesCards(){
        return recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
    }

    function handleCheck(){
      console.log(currentUser)
    }

    function handleLogOut(){
      fetch("/logout", {
          method: "DELETE",
      }).then(() => setCurrentUser(null))
      .then(console.log('logged out'))
    }

    return (
      <div>
        <button onClick={handleCheck}>Check if Logged In</button>
        {!currentUser ? <button onClick={handleClick}>Log In</button> : <button onClick={handleLogOut}>Log Out</button>}
        {createRecipesCards()}
      </div>
    )
}

export default RecipePage