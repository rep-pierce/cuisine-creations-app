import React, {useState} from 'react'

function AllIngredientsCard({ingredient, rID}) {
    const [display, setDisplay] = useState("not selected")
    const [amount, setAmount] = useState("")
    const [errors, setErrors] = useState([])
    
    function handleDisp(){
        if (display === "not selected"){
            setDisplay("selected")
        }else {
            setDisplay("not selected")
        }
    }
    function handleChange(e){
        setAmount(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        const joinir = {
            ingredient_id: ingredient.id,
            recipe_id: rID,
            amount: amount
        }
        fetch('/joinirs', {
            method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(joinir),
        }).then((r) => {
            if (r.ok) {
                r.json()
                .then(alert("success"))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })

    }


  return (
    <div>
        <p>{ingredient.name}</p>
        <img src={ingredient.image} alt={ingredient.name} style={{ height: '50px', width: '50px' }} />
        <button onClick={handleDisp}>{display === "not selected" ? "Add to Recipe" : "Cancel"}</button>
        {display === "not selected" ? null : 
        <form onSubmit={handleSubmit}>
            <label className='amount-label' htmlFor='amount'>
                Amount: {" "}
            </label>
            <input className='amount-input' type="text" value={amount} onChange={(e) => handleChange(e)}/>
            <button className="login-button" type="submit" value="Login">
				Submit
			</button>
        </form>}
        {!errors ? null : errors.map((error) => <p key={error}>{error}</p>)}
    </div>
  )
}

export default AllIngredientsCard