import React, { useState } from "react";

function LoginForm({errors, setErrors, currentUser, setCurrentUser, history}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/login", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({ username, password }),
		}).then((r) => {
		  if (r.ok) {
			r.json().then((user) => setCurrentUser(user)).then(history.push('/'))
		  } else {
			r.json().then((err) => setErrors(err.errors));
		  }
		});
	  }

	return (
		<form onSubmit={handleSubmit}>
			<label> Username </label>
			<input
				type="text"
				id="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			></input>
			<label> Password </label>
			<input
				// type="password"
				id="password"
				autoComplete="off"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			></input>
			<button>Log In</button>
		</form>
	);
}

export default LoginForm;
