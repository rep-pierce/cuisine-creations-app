import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function RecipeForm({ currentUser, recipes, setRecipes, rID, setRID }) {
	const [errors, setErrors] = useState([]);
	const history = useHistory();
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		recipe_time: "",
		tags: "asian",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	function handleSubmit(e) {
		e.preventDefault();
		// debugger;
		const recipe = {
			name: formData.name,
			image: formData.image,
			recipe_time: formData.recipe_time,
			tags: formData.tags,
			user_id: currentUser.id,
		};
		fetch(`/recipes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recipe),
		}).then((r) => {
			if (r.ok) {
				r.json()
					.then((recipe) => {
						setRID(recipe.id);
						setRecipes([recipe, ...recipes]);
					})
					.then(history.push("/ingredientslist"));
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

	return (
		<div>
			<div className="new-recipe-card">
				<br />
				<div className="error-wrapper">
					<div className="errors">
						{!errors
							? null
							: errors.map((error) => (
									<p className="error" key={Math.random() * 1000000}>
										{error}
									</p>
							  ))}
					</div>
				</div>
				<form className="login-form" onSubmit={handleSubmit}>
					<div>
						<label className="login-label" htmlFor="name">
							Name:
						</label>
						<input
							className="login-input"
							type="text"
							name="name"
							value={formData.name}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label className="login-label" htmlFor="age">
							Image:
						</label>
						<input
							className="login-input"
							type="text"
							name="image"
							value={formData.image}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label className="login-label" htmlFor="username">
							Recipe Time:
						</label>
						<input
							className="login-input"
							type="integer"
							name="recipe_time"
							value={formData.recipe_time}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<label className="login-label" htmlFor="password">
							Tags:
						</label>{" "}
						<select name="tags" onChange={(e) => handleChange(e)}>
							<option value="asian">asian</option>
							<option value="american">american</option>
							<option value="italian">italian</option>
							<option value="vegan">vegan</option>
							<option value="vegetarian">vegetarian</option>
							<option value="mediterranean">mediterranean</option>
							<option value="quick/easy">quick/easy</option>
							<option value="indian">indian</option>
							<option value="mexican">mexican</option>
							<option value="dessert">dessert</option>
						</select>
					</div>

					<div>
						<button className="login-button" type="submit">
							Add Ingredients
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RecipeForm;
