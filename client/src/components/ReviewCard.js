import React from 'react'
import StarRating from './StarRating'

function ReviewCard({review}) {

  return (
    <div>
      <h3>{review.review_for}</h3>
      <p>{review.review}</p>
      <StarRating />
    </div>
  )
}

export default ReviewCard