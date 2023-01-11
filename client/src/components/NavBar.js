import React from "react";
import { NavLink, useHistory } from "react-router-dom";


function NavBar({ currentUser, setCurrentUser }) {
	const history = useHistory()
	//navbar include home, recipes, user, create new recipe, login
	function handleLogOut() {
		fetch("/logout", {
			method: "DELETE",
		})
			.then(() => setCurrentUser(null))
			.then(history.push('/'));
	}

	return (
		<div className="navbar">
			{!currentUser ? null : <h4 className="font-effect-3d-float">Welcome {currentUser.name} </h4>}
			<NavLink className="navbar-item" exact to="/">
				Home
			</NavLink>
			{!currentUser ? null : (
				<NavLink className="navbar-item" to="/userpage">
					User
				</NavLink>
			)}
			{currentUser ? (
				<NavLink className="navbar-item" to="/favorites">
					{" "}
					Favorites{" "}
				</NavLink>
			) : null}
			{currentUser ? (
				<NavLink className="navbar-item" to="/recipeform">
					{" "}
					New Recipe{" "}
				</NavLink>
			) : null}
			{!currentUser ? (
				<NavLink className="navbar-item" to="/userlogin">
					{" "}
					Log In{" "}
				</NavLink>
			) : (
				<button className="navbar-item" onClick={handleLogOut}>
					Log Out
				</button>
			)}
		</div>
	);
}
export default NavBar;
