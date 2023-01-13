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
		<div className="nav-bar">
			{!currentUser ? null : <h4 className="font-effect-3d-float">Welcome {currentUser.name} </h4>}
			<NavLink className="nav-link" exact to="/">
				Home
			</NavLink>
			{!currentUser ? null : (
				<NavLink className="nav-link" to="/userpage">
					User
				</NavLink>
			)}
			{currentUser ? (
				<NavLink className="nav-link" to="/favorites">
					{" "}
					Favorites{" "}
				</NavLink>
			) : null}
			{currentUser ? (
				<NavLink className="nav-link" to="/recipeform">
					{" "}
					New Recipe{" "}
				</NavLink>
			) : null}
			{!currentUser ? (
				<NavLink className="nav-link" to="/userlogin">
					{" "}
					Log In{" "}
				</NavLink>
			) : (
				<button className="nav-link" onClick={handleLogOut}>
					Log Out
				</button>
			)}
		</div>
	);
}
export default NavBar;
