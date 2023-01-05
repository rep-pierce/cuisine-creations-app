import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';

function UserPage({ currentUser, setCurrentUser, formData, setFormData }) {
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
		fetch(`/users/${currentUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(currentUser),
		})
			.then((r) => r.json())
			.then(setCurrentUser);
	}

	return (
		<div>
            <div className="New-user-card">
                <br/>
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
						<labe className="login-label" htmlFor="username">
							Username:
						</labe>
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
			</div>
		</div>
	);
}

export default UserPage;
