import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function RecipeForm({ currentUser, recipes, setRecipes }) {
	const [errors, setErrors] = useState([]);
	const history = useHistory();
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		recipe_time: "",
		tags: ""
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
					.then((recipe) => setRecipes([...recipes, recipe]))
					.then(history.push("/"));
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

	return (
		<div>
			<div className="New-user-card">
				<br />
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
						</label>
						<input
							className="login-input"
							type="text"
							name="tags"
							value={formData.tags}
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div>
						<input className="login-button" type="submit" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default RecipeForm;
