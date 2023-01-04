import React from 'react'

function StepCard({step}) {
  return (
    <div>
        <p>Step Number:{step.step_number}</p>
        <p>{step.direction}</p>
    </div>
  )
}

export default StepCard