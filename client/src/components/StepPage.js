import React, { useState } from 'react'
import StepForm from './StepForm'


function StepPage() {
// add step and additional steps and increment per additional step
const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState('');

  function handleChange(event) {
    setCurrentStep(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSteps([...steps, currentStep]);
    setCurrentStep('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a step:
        <input type="text" value={currentStep} onChange={handleChange} />
      </label>
      <input type="submit" value="Add Step" />
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </form>
  );
}

export default StepPage