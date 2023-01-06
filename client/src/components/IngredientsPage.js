
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import AllIngredientsCard from "./AllIngredientsCard";

function IngredientsPage({rID, setRID}){
    const [allIngredients, setAllIngredients] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch(`/ingredients`)
        .then(r => r.json())
        .then(setAllIngredients)
    }, [])

    function listIngredients(){
        return allIngredients.map(ingredient => <AllIngredientsCard key={ingredient.id} rID={rID} ingredient={ingredient} />)
    }
    function handleHome(){
        history.push('/')
    }
    return(
        <div>
            <button className='button'>Add Ingredient to the Database</button>
            {listIngredients()}
            <button className="button" onClick={handleHome}>Add Steps</button>
        </div>
    )
}

export default IngredientsPage