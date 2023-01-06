import { useState } from "react";

const AverageStarRating = ({ recipe }) => {
	return (
		<div className="star-rating">
			{[...Array(recipe.average_rating)].map((star, index) => {
				index += 1;
				return (
					<button type="button" key={index} className="on">
						<span className="star">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};

export default AverageStarRating;
