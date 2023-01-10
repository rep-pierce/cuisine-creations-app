import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { AnimatePresence, motion } from "framer-motion";

function RecipePage({ recipes, setRecipes, currentUser, rID, setRID }) {
	useEffect(() => {
		fetch("/recipes")
			.then((r) => r.json())
			.then(setRecipes);
	}, []);

	function createRecipesCards() {
		return recipes.map((recipe) => (
			<RecipeCard
				key={Math.random() * 1000000}
				recipe={recipe}
				rID={rID}
				setRID={setRID}
			/>
		));
	}

	return (
		<>
			<h1 className="font-effect">Cuisine Creations</h1>
			<AnimatePresence>
				<div className="recipe-page">
					{createRecipesCards().map((card, index) => (
						<motion.div
							className="recipes"
							key={Math.random() * 1000000}
							initial={{ y: -50 }}
							animate={{ y: 0 }}
							exit={{ y: 50 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
						>
							{/* {card} */}
						</motion.div>
					))}
				</div>
			</AnimatePresence>
		</>
	);
}

export default RecipePage;
