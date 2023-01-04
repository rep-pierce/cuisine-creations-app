import React, { useState } from "react";

function LoginForm({setErrors, setCurrentUser, history}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleUsernameChange(e){
        setUsername(e.target.value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

	function handleSubmit(e){
        e.preventDefault()
        const loginParams = {
            username: username,
            password: password
        }

        fetch(`/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginParams)
        })
            .then(res => {
                if(res.ok) {
                    res.json().then(setCurrentUser).then(history.push('/'))
                } else {
                    res.json().then( (err) => setErrors(err.errors) )
                }
            })
    }

	return (
        <div className='login-form-div'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => handleUsernameChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="pass" name="password" value={password} onChange={(e) => handlePasswordChange(e)} />
                </div>
                <div>
                    <button className='button' type="submit" value="Login">
                    Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
