import React from 'react'

function IngredientCard({ingredient}) {
  return (
    <div>
      <img src={ingredient.image} alt={ingredient.name} style={{ height: '50px', width: '50px' }}/><p>{ingredient.name}</p><p>{ingredient.amount}</p>
    </div>
  )
}

export default IngredientCard