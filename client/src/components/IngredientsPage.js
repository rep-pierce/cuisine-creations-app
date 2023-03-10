import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AllIngredientsCard from "./AllIngredientsCard";
import IngredientForm from "./IngredientForm";

function IngredientsPage({ rID, setRID }) {
	const [allIngredients, setAllIngredients] = useState([]);
	const [display, setDisplay] = useState("no");
	const history = useHistory();

	useEffect(() => {
		fetch(`/ingredients`)
			.then((r) => r.json())
			.then(setAllIngredients);
	}, []);

	function listIngredients() {
		return allIngredients.map((ingredient) => (
			<AllIngredientsCard
				key={Math.random() * 1000000}
				rID={rID}
				ingredient={ingredient}
			/>
		));
	}
	function handleNav() {
		history.push("/steps");
	}
	function handleDisp() {
		if (display === "no") {
			setDisplay("yes");
		} else {
			setDisplay("no");
		}
	}
	return (
		<div className="ingredient-div">
			<div className="button-div">
				<button className="button" onClick={handleDisp}>
					Add Ingredients
				</button>
			</div>
			{display === "yes" ? (
				<IngredientForm
					allIngredients={allIngredients}
					setAllIngredients={setAllIngredients}
					setDisplay={setDisplay}
				/>
			) : null}
			<div className="ingredient-parent">{listIngredients()}</div>
			<div className="button-div">
				<button className="button" onClick={handleNav}>
					Add Steps
				</button>
			</div>
		</div>
	);
}

export default IngredientsPage;
