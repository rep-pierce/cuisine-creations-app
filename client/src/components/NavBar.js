import React from "react";
import { NavLink } from "react-router-dom";
function NavBar({ currentUser, setCurrentUser }) {
	//navbar include home, recipes, user, create new recipe, login
	function handleLogOut() {
		fetch("/logout", {
			method: "DELETE",
		})
			.then(() => setCurrentUser(""))
			.then(console.log("logged out"));
	}

	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			{!currentUser ? null : `Welcome ${currentUser.name}`}
			{!currentUser ? (
				<NavLink to="/userlogin"> Log In </NavLink>
			) : (
				<button onClick={handleLogOut}>Log Out</button>
			)}
        <NavLink to="/userpage">User</NavLink>
			{currentUser ? <NavLink to="/favorites"> Favorites </NavLink> : null}
		</nav>
	);
}
export default NavBar;
