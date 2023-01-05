import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import ConfettiDrop from "./Confetti";



function Favorites({ currentUser }) {
const [favorites, setFavorites] = useState([])
  

  useEffect(() => {
    const favoriteData = async () => {
      const user = await currentUser
      const favorites = await user.favorite_recipes
      setFavorites(favorites)
    }

    favoriteData()
   }, [currentUser])
  
  if (!favorites || !currentUser) {
    return <div>Loading...</div>
  }

  function createFavorites() {
    // debugger
		return favorites.map((recipe) => (
      <RecipeCard currentUser={currentUser} key={recipe.id * (Math.random()*1000000)} recipe={recipe} />
		));
	}
  return <div className="recipe-favorites">
    <ConfettiDrop/>
    {createFavorites()}</div>;
}

export default Favorites;
