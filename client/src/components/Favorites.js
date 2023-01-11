import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import ConfettiDrop from "./Confetti";



function Favorites({ currentUser, favs, setFavs, rID, setRID }) {

  if (!currentUser) {
		return <div>Loading...</div>;
	}

  function createFavorites() {
		return favs.map((recipe) => (
      <RecipeCard currentUser={currentUser} key={Math.random()*1000000} rID={rID} setRID={setRID} recipe={recipe} favs={favs} setFavs={setFavs} />
		));
	}
  return (
  <div className="recipe-favorites">
    <ConfettiDrop/>
    {createFavorites()}
  </div>
)}

export default Favorites;
