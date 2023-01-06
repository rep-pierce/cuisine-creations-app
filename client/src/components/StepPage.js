import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import StepForm from './StepForm';
import StepCard from './StepCard';

function StepPage({rID, setRID}) {
    const history = useHistory()
    const [steps, setSteps] = useState([])
    const [errors, setErrors] = useState([])
    const [formCount, setFormCount] = useState(1)
    const inCreation = true
    
    
    function handleAdd(){
        setFormCount(formCount + 1)
    }
    function handleDelete(e, num){
        setSteps(steps.filter(s => s.step_number !== num))
    }

    function handleSubmit(){
        fetch('/steps', {
            method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ _json: steps}),
        }).then((r) => {
            if (r.ok) {
                r.json()
                .then(alert("success"))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        history.push('/')
    }
    return(
        <div>
            <button className='button' onClick={handleAdd}>Add New Step</button>
            {steps.length > 0? steps.map(step => <StepCard step={step} key={Math.random()*1000000} handleDelete={handleDelete} inCreation={inCreation} />) : null}
            {[...Array(formCount)].map((x, i) => (
                <StepForm key={Math.random()*1000000}steps={steps} setSteps={setSteps} rID={rID} />
            ))}
            {!errors ? null : errors.map((error) => <p key={Math.random()*1000000}>{error}</p>)}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default StepPage