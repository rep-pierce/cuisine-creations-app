import React, { useState } from "react";

function AllIngredientsCard({ ingredient, rID }) {
	const [display, setDisplay] = useState("not selected");
	const [amount, setAmount] = useState("");
	const [errors, setErrors] = useState([]);

	function handleDisp() {
		if (display === "not selected") {
			setDisplay("selected");
		} else {
			setDisplay("not selected");
		}
	}
	function handleChange(e) {
		setAmount(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		const joinir = {
			ingredient_id: ingredient.id,
			recipe_id: rID,
			amount: amount,
		};
		fetch("/joinirs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(joinir),
		}).then((r) => {
			if (r.ok) {
				r.json().then(alert("success"));
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

	return (
		<div className="ingredient-card">
			{" "}
			<p>{ingredient.name}</p>
		{ display === "not selected" ?	<img
				src={ingredient.image}
				alt={ingredient.name}
				className="ingredient-image"
			/> : null}{" "}
			<button className="add-ing" onClick={handleDisp}>
				{display === "not selected" ? "Add to Recipe" : "Cancel"}
			</button>
			{display === "not selected" ? null : (
				<form onSubmit={handleSubmit} className="ingredient-form">
					{" "}
					<label className="amount-label" htmlFor="amount">
						Amount:{" "}
					</label>
					<input
						className="amount-input"
						type="text"
						value={amount}
						onChange={(e) => handleChange(e)}
					/>
					<button className="submit" type="submit" value="Login">
						Submit
					</button>
				</form>
			)}
			{!errors ? null : errors.map((error) => <p key={Math.random() * 1000000}>{error}</p>)}
		</div>
	);
}

export default AllIngredientsCard;
