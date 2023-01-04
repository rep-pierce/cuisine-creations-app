import React, {useEffect, useState} from "react";
import StepCard from "./StepCard";
import {useParams} from 'react-router-dom'

function RecipeView({currentUser}) {
    const [recipe, setRecipe] = useState(null)
    const {id} = useParams()
    

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`/recipes/${id}`)
            const recipe = await response.json()
            setRecipe(recipe)
        }

        fetchData()
        
    }, [id])

    if (!recipe) {
        return <div>Loading...</div>
    }

    function renderSteps(){
        return recipe.steps.map(step => <StepCard step={step} key={step.id} />)
    }

    return (
      <div>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />
        {renderSteps()}
        {currentUser.id === recipe.user.id ? <button>Delete Recipe</button> : null}
      </div>
    )
}   

export default RecipeView