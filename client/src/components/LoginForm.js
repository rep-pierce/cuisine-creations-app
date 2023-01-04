import React from "react";

function LoginForm({setErrors, setCurrentUser, history, username, password, handleChange}) {

	function handleSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }

        fetch(`/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((r) => {
            if(r.ok) {
                r.json().then((user) => setCurrentUser(user)).then(history.push('/'))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

	return (
        <div className='login-form-div'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="pass" name="password" value={password} onChange={(e) => handleChange(e)} />
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
