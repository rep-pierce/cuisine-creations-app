import React from 'react'

function StepCard({step, inCreation, handleDelete}) {
  return (
    <div>
        <p>Step Number:{step.step_number}</p>
        <p>{step.direction}</p>
        { inCreation ? <button onClick={(e) => handleDelete(e, step.step_number)} >remove</button> : null}
    </div>
  )
}

export default StepCard