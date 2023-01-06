import React from "react";
import StarRating from "./StarRating";

function ReviewCard({ review, rating, reviewFor, id }) {
  
	function handleDelete() {
		fetch(`/reviews/${id}`, {
			method: "DELETE",
    });
   window.location.reload()
	}
	return (
		<div>
			{!reviewFor ? null : <h3>{reviewFor}</h3>}
			<p>{review}</p>
      <StarRating rRating={rating} />
      <br/>
			{!reviewFor ? null : <button className="delete-button" onClick={handleDelete}> Delete </button>}
		</div>
	);
}

export default ReviewCard;
