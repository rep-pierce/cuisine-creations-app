import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import IngredientCard from "./IngredientCard";
import { useParams, useHistory } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function RecipeView({ recipes, setRecipes, currentUser }) {
	const [recipe, setRecipe] = useState(null);
	const history = useHistory();
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
	function renderIng(){
		return recipe.ingredients_with_amount.map((ingredient) => <IngredientCard key={Math.random()*100000} ingredient={ingredient}/>)
	  }

	function renderSteps() {
		// debugger
		return recipe.steps.map((step) => <StepCard step={step} key={step.id} />);
	}

	function deleteRecipe() {
		fetch(`/recipes/${recipe.id}`, {
			method: "DELETE",
		});
		history.push("/");
	}

	function handleReviews() {
		return recipe.reviews.map((review) => (
			<ReviewCard
				review={review.review}
				rating={review.rating}
				key={Math.random() * 1000000}
			/>
		));
	}

	return (
		<div>
			<h1>{recipe.name}</h1>
			<img src={recipe.image} alt={recipe.name} />
			<h3>Ingredients:</h3>
			{renderIng()}
			{renderSteps()}
			{currentUser.id === recipe.user.id ? (
				<button onClick={deleteRecipe}>Delete Recipe</button>
			) : null}
			{handleReviews()}
		</div>
	);
}

export default RecipeView;
