import React from "react";
import { useHistory } from "react-router-dom";
import AverageStarRating from "./AverageStarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as Bookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as liBookmark } from "@fortawesome/free-regular-svg-icons";

function RecipeCard({ recipe, setRID, favs, setFavs, currentUser }) {
	const history = useHistory();
	function handleNav() {
		// setRID(recipe.id)
		history.push(`/recipe/${recipe.id}`);
	}
	function handleAddFav() {
		const fav = {
			user_id: currentUser.id,
			recipe_id: recipe.id,
		};
		fetch(`/favorites`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fav),
		})
			.then((r) => r.json())
			.then((newFav) => setFavs([...favs, newFav]));
	}
	function handleRemoveFav() {
		const newFavs = favs.filter(
			(fav) => fav.favorite_index !== recipe.favorite_index
		);
		setFavs(newFavs);
		fetch(`/favorites/${recipe.favorite_index}`, {
			method: "DELETE",
		});
	}
	function handleRemove() {
		return !recipe.favorite_index ? (
			<p className="bookmark">
				{" "}
				<FontAwesomeIcon icon={Bookmark} bounce/>{" "}
			</p>
		) : (
			<button className="button" onClick={handleRemoveFav}>
				<FontAwesomeIcon icon={Bookmark} bounce/>
			</button>
		);
	}
	function handleFavs() {
		const hasInFavs = favs.some((fav) => fav.id === recipe.id);
		return hasInFavs ? (
			handleRemove()
		) : (
			<button className="button" onClick={handleAddFav}>
				<FontAwesomeIcon icon={liBookmark} bounce />
			</button>
		);
	}
	return (
		<div className="recipes">
			<div onClick={handleNav}>
				<img
					src={recipe.image}
					alt={recipe.name}
					style={{ width: 300, height: 300 }}
				/>
				<p> Tag: {recipe.tags}</p>
				<h1>{recipe.name}</h1>
				<h2>
					<span>&#9200;</span> {recipe.recipe_time} min{" "}
				</h2>
			</div>
			<AverageStarRating recipe={recipe} />
			<br />
			{!recipe.user ? null : <p>Created by: {recipe.user.name}</p>}
			{!currentUser ? null : handleFavs()}
		</div>
	);
}

export default RecipeCard;
