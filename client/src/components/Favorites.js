import React from "react";
import RecipeCard from "./RecipeCard";

function Favorites({ currentUser }) {
	if (!currentUser) {
		return <div>...loading</div>;
	}

  function createFavorites() {
    // debugger
		return currentUser.favorite_recipes.map((recipe) => (
			<RecipeCard key={recipe.id + 1000000000} recipe={recipe} />
		));
	}
	return <div>{createFavorites()}</div>;
}

export default Favorites;
