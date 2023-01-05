import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import { useParams, useHistory } from "react-router-dom";

function RecipeView({ recipes, setRecipes, currentUser }) {
    const [recipe, setRecipe] = useState(null);
    const history = useHistory()
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/recipes/${id}`);
			const recipe = await response.json();
			setRecipe(recipe);
		};

		fetchData();
	}, [id]);

	if (!recipe || !currentUser) {
		return <div>Loading...</div>;
	}

	function renderSteps() {
		// debugger
		return recipe.steps.map((step) => <StepCard step={step} key={step.id} />);
	}

	function deleteRecipe() {
		fetch(`/recipes/${recipe.id}`, {
			method: "DELETE",
        });
        history.push("/")
	}

	return (
		<div>
			<h1>{recipe.name}</h1>
			<img src={recipe.image} alt={recipe.name} />
			{renderSteps()}
			{currentUser.id === recipe.user.id ? (
				<button onClick={deleteRecipe}>Delete Recipe</button>
			) : null}
		</div>
	);
}

export default RecipeView;
