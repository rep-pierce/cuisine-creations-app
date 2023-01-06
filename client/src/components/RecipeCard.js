import React from "react";
import { useHistory } from "react-router-dom";
import AverageStarRating from "./AverageStarRating";

function RecipeCard({ recipe, currentUser }) {
	const history = useHistory();
	function handleNav() {
		history.push(`/recipe/${recipe.id}`);
	}
	return (
		<div className="recipes">
			<div onClick={handleNav}>
				<img src={recipe.image} alt={recipe.name} />
				<p> Tag: {recipe.tags}</p>
				<h1>{recipe.name}</h1>
				<h2><span>&#9200;</span> {recipe.recipe_time} min </h2>
			</div>
      <AverageStarRating recipe={recipe}/>
			<br />
				{!recipe.user ? null : <p>Created by: {recipe.user.name}</p>}
		</div>
	);
}

export default RecipeCard;
