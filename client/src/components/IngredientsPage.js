
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import AllIngredientsCard from "./AllIngredientsCard";
import IngredientForm from "./IngredientForm"

function IngredientsPage({rID, setRID}){
    const [allIngredients, setAllIngredients] = useState([])
    const [display, setDisplay] = useState('no')
    const history = useHistory()

    useEffect(() => {
        fetch(`/ingredients`)
        .then(r => r.json())
        .then(setAllIngredients)
    }, [])

    function listIngredients(){
        return allIngredients.map(ingredient => <AllIngredientsCard key={ingredient.id} rID={rID} ingredient={ingredient} />)
    }
    function handleNav(){
        history.push('/steps')
    }
    function handleDisp(){
        if (display === 'no'){
            setDisplay('yes')
        }else {
            setDisplay('no')
        }
    }
    return(
        <div >
            <button className='button' onClick={handleDisp}>Add Ingredient to the Database</button>
            {display === 'yes' ? <IngredientForm allIngredients={allIngredients} setAllIngredients={setAllIngredients} setDisplay={setDisplay} /> : null}
           <div className="ingredient-parent">{listIngredients()}</div> 
            <button className="button" onClick={handleNav}>Add Steps</button>
        </div>
    )
}

export default IngredientsPage