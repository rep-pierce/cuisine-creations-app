import { useState } from "react";

function RecipeReview() {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");

	function handleSubmit() {}

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<textarea
					onChange={(e) => setReview(e.target.value)}
					placeholder="Review"
					value={review}
				></textarea>
				<br />
				<select className="rating-input"onChange={(e) => setRating(e.target.value)} value={rating}>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<button className="button">Submit</button>
			</form>
		</div>
	);
}

export default RecipeReview;
