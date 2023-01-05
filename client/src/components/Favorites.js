import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import ConfettiDrop from "./Confetti";



function Favorites({ currentUser }) {
const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const favoriteData = async () => {
      const favorites = await currentUser.favorite_recipes
      setFavorites(favorites)
    }
    favoriteData()
   }, [currentUser.favorite_recipes])
	if (!favorites) {
		return <div>...loading</div>;
	}

  function createFavorites() {
    // debugger
		return favorites.map((recipe) => (
			<RecipeCard key={recipe.id + 1000000000} recipe={recipe} />
		));
	}
  return <div className="recipe-favorites">
    <ConfettiDrop/>
    {createFavorites()}</div>;
}

export default Favorites;
