import React, {useState} from 'react'

function IngredientForm({allIngredients, setAllIngredients, setDisplay}) {
    const [formData, setFormData] = useState({
        name: '',
        image: ''
    })
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

    function handleSubmit(e){
        e.preventDefault()
        const newIngredient={
            name: formData.name,
            image: formData.image
        }
        fetch("/ingredients", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newIngredient),
          }).then((r) => {
            if (r.ok) {
                r.json()
                .then((ingr) => {
                    setAllIngredients([...allIngredients, ingr])
                    setDisplay('no')
                    alert(`Added ${ingr.name} to Database`)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })

        }

    return(
        <div >
        <form className='ingredient-form' onSubmit={handleSubmit}>
            <div >
                <label className='ingredient-label'>Name:</label>
                <input className='ingredient-input' type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label className='ingredient-label' >Image:</label>
                <input className='ingredient-input' type="integer" name="image" value={formData.image} onChange={handleChange} />
            </div>
            <div>
                <input className='ingredient-button' type="submit" />
            </div>
        </form>
        {!errors ? null : errors.map((error) => <p key={error}>{error}</p>)}
    </div>
    )

}

export default IngredientForm