import React, { useDebugValue, useState } from 'react';

function StepForm() {
const[steps, setSteps]= useState("")

function handleChange(e){
    setSteps({
        ...steps,
        [e.target.name]: e.target.value,
    });
}
    
function handleSubmit(e){
    e.preventDefault()
    fetch('/steps', {
            method: 'POST',
            body: JSON.stringify({ steps }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((r) => r.json())
        .then(setSteps)
}   

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    enter step
                <input type ="text" name="step" onChange={handleChange}/>
                </label>
                <div>
                    <button type="submit"> submit step </button>
                </div>
            </form>
        </div>
    )
} export default StepForm;


// const [steps, setSteps] = useState([]);
    // const history = useHistory()
    // const [currentStep, setCurrentStep] = useState('');
    // const [errors, setErrors] = useState([])

    // function handleChange(event) {
    //     setCurrentStep(event.target.value);
    // }

    // function handleNewStep(event) {
    //     event.preventDefault();
    //     setSteps([...steps, currentStep]);
    //     setCurrentStep('');
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setSteps([...steps, currentStep]);
    //     setCurrentStep('');

    //     fetch('/steps', {
    //         method: 'POST',
    //         body: JSON.stringify({ steps }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((r) => {
	// 		if (r.ok) {
	// 			r.json()
	// 				.then((step) => setSteps([...steps, step]))
	// 				.then(history.push("/"));
	// 		} else {
	// 			r.json().then((err) => setErrors(err.errors));
	// 		}
	// 	});
    // }

    // function handleRemove(index) {
    //     setSteps(steps.filter((step, i) => i !== index));
    // }

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 Enter a step:
    //                 <input type="textarea" value={currentStep} onChange={handleChange} />
    //             </label>
    //             <input type="submit" value="Add Step" />
    //             <ul>
    //                 {steps.map((step, index) => (
    //                     <li key={index}>
    //                         {step}
    //                         <button type="button" onClick={() => handleRemove(index)}>
    //                             Remove
    //                         </button>
    //                     </li>
    //                 ))}
    //             </ul>
    //             <div>
    //                 <input className="step-button" type="submit" />
    //             </div>
    //         </form>
    //     </div>
    // );