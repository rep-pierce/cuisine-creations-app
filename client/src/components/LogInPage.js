import React, { useState } from "react";
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import { useHistory } from "react-router-dom";

function LogInPage({currentUser, setCurrentUser}){
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    })
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const [display, setDisplay] = useState('login')

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((formData) => ({
            ...formData,
            [name] : value
        }));
    }

    const handleLog = () => {
        setFormData({
            name: '',
            age: '',
            username: '',
            password: '',
            passwordConfirmation: ''
        })
        setDisplay('login')
        setErrors([])
    }
    const handleNew = () => {
        setDisplay('new')
        setErrors([])
    }

    const handleRender = () => {
        if (display === "login") {
            return <LoginForm 
            errors={errors}
            setErrors={setErrors}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            history={history}
            />
        } else if (display === "new") {
            return <NewUserForm 
            formData={formData} 
            handleChange={handleChange}
            setCurrentUser={setCurrentUser}
            setErrors={setErrors}
            history={history}
            errors={errors}
            />
        }
    }

    const handleHome = () => {
        history.push('/')
    }

    return (
        <div className='Login-card'>
            <button className='button' onClick={handleNew}>Create New User</button>
            <button className='button' onClick={handleLog}>Login to Your Account</button>
            {handleRender(display)}
            <button className='button' onClick={handleHome}>Return to Homepage</button>
            { !errors ? null : errors.map(error => <p key={error}>{error}</p>)}
        </div>
    )
}

export default LogInPage;