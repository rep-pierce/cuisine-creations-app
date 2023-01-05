import React from 'react';

const NewUserForm = ({ formData, handleChange, setCurrentUser, setErrors, history, errors }) => {
    
    function handleSubmit(e){
        e.preventDefault();
        const user = {
            name: formData.name,
            age: formData.age,
            username: formData.username,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
        }
        fetch(`/users`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user)).then(history.push('/'))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }
    
    return(
        <div className="New-user-card">
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label className='login-label' htmlFor="name">Name:</label>
                    <input className='login-input' type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label className='login-label' htmlFor="age">Age:</label>
                    <input className='login-input' type="integer" name="age" value={formData.age} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label className='login-label' htmlFor="username">Username:</label>
                    <input className='login-input' type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label className='login-label' htmlFor="password">Password:</label>
                    <input className='login-input' type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label className='login-label' htmlFor="password_confirmation">Confirm Password:</label>
                    <input className='login-input' type="password" id="password_confirmation" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='login-button' type="submit" />
                </div>
            </form>
        </div>
        )
}

export default NewUserForm;