import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import RecipeCard from "./RecipeCard";

function UserPage({ currentUser, setCurrentUser, recipes }) {
	const [errors, setErrors] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		username: "",
		password: "",
	});
	useEffect(() => {
		const formCreate = async () => {
			const user = await currentUser;
			setFormData({
				name: user.name,
				age: user.age,
				username: user.username,
				password: "",
			});
		};
		formCreate();
	}, [currentUser]);

	if (!currentUser) {
		return <div>...loading</div>;
	}
	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	function handleUpdate(e) {
		e.preventDefault();
		const patchUser = {
			name: formData.name,
			age: formData.age,
			username: formData.username,
			password: formData.password,
		};

		fetch(`/users/${currentUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(patchUser),
		}).then((r) => {
			if (r.ok) {
				r.json().then(setFormData);
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}
	function reviewMapped() {
		return currentUser.reviews.map((review) => (
			<ReviewCard
				id={review.id}
				review={review.review}
				rating={review.rating}
				reviewFor={review.review_for}
				key={Math.random() * 1000000}
			/>
		));
	}
	function recipeMapped() {
		return currentUser.recipes.map((recipe) => (
			<RecipeCard recipe={recipe} key={Math.random() * 1000000} />
		));
	}

	return (
		<>
			<div className="parent-div">
				<div className="container">
					<h2>Your Reviews:
						</h2>
						<div>{reviewMapped()}</div>
				</div>
				<div className="container">
				<h2>Your Recipes:
						</h2>
					<div>{recipeMapped()}</div>
				</div>
			</div>
		<div className="new-user-card">
			<br />
			<div className="error-wrapper">
				<div className="errors">
					{!errors
						? null
						: errors.map((error) => (
							<p className="error" key={Math.random()*1000000}>
									{error}
								</p>
						  ))}
				</div>
				<h3>Change Info</h3>
				</div>
			<form className="login-form" onSubmit={handleUpdate}>
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
						Age:
					</label>
					<input
						className="login-input"
						type="integer"
						name="age"
						value={formData.age}
						onChange={(e) => handleChange(e)}
						/>
				</div>
				<div>
					<label className="login-label" htmlFor="username">
						Username:
					</label>
					<input
						className="login-input"
						type="text"
						name="username"
						value={formData.username}
						onChange={(e) => handleChange(e)}
						/>
				</div>
				<div>
					<label className="login-label" htmlFor="password">
						Password:
					</label>
					<input
						className="login-input"
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div>
					<input className="login-button" type="submit" />
				</div>
			</form>
			<br />
		</div>
						</>
	);
}

export default UserPage;
