import { useState } from "react";

function RecipeReview({history, rID, currentUser}) {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
	const [errors, setErrors] = useState([]);



	function handleSubmit(e) {
		e.preventDefault()
		const reviewForm = {
			user_id: currentUser.id,
			recipe_id: rID,
			rating: parseInt(rating),
			review: review
		}
		console.log(reviewForm)
		fetch(`/reviews`,{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reviewForm),
		})
		.then((r) => {
			if (r.ok) {
				r.json()
					.then(window.location.reload())
	
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

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
			<div>
			{!errors ? null : errors.map((error) => <p className="error" key={Math.random()*1000000}>{error}</p>)}
			</div>
		</div>
	);
}

export default RecipeReview;
