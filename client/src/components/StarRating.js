import { useState } from "react";

const StarRating = ({rRating}) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<div className="star-rating">
			{[...Array(rRating)].map((index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						className="on"
		
					>
						<span className="star">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
