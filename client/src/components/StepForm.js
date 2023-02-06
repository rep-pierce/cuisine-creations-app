import React, {useState} from 'react'

function StepForm({steps, setSteps, rID}) {
    const [formData, setFormData] = useState({
        recipe_id: rID,
        step_number: 1,
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
          <br/>
        <form className='recipe-form' onSubmit={handleSubmit}>
            <div>
                <label className='recipe-label'>Step Number:</label>
                <input className='recipe-input' type="integer" name="step_number" value={formData.step_number} onChange={handleChange} />
            </div>
            <div>
                <label className='recipe-label'>Step Direction:</label>
                <input className='recipe-input' type="integer" name="direction" value={formData.direction} onChange={handleChange} />
            </div>
            <div>
                <button className='button' type="submit">confirm</button>
            </div>
          </form>
          <br/>
    </div>
  )
}

export default StepForm