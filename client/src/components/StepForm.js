import React, {useState} from 'react'

function StepForm({steps, setSteps, rID}) {
    const [formData, setFormData] = useState({
        recipe_id: rID,
        step_number: 0,
        direction: ""
    })

    function handleChange(e){
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

    function handleSubmit(e){
        e.preventDefault()
        setSteps([...steps, formData])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Step Number:</label>
                <input type="integer" name="step_number" value={formData.step_number} onChange={handleChange} />
            </div>
            <div>
                <label>Step Direction:</label>
                <input type="integer" name="direction" value={formData.direction} onChange={handleChange} />
            </div>
            <div>
                <button className='button' type="submit">confirm</button>
            </div>
        </form>
    </div>
  )
}

export default StepForm