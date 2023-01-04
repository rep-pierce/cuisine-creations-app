import React, { useState } from "react";

function LoginForm({setCurrentUser, history}) {
	const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors]

    const {username, password} = formData

	function handleUsernameChange(e){
        setUsername(e.target.value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

	function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch(`/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
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
