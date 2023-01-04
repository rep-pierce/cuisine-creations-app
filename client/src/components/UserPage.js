import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';


function UserPage({currentUser, setCurrentUser, formData, setFormData}) {

    if (!currentUser){
        return <div>...loading</div>
    }
const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((formData) => ({
        ...formData,
        [name] : value
    }));
}

function handleUpdate(e){
    e.preventDefault()
    fetch(`/users/${currentUser.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(currentUser),
    })
    .then((r)=>r.json())
    .then(setCurrentUser)
}

  return (
    <div>
        <section>
        <div className="New-user-card">
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="integer" name="age" value={formData.age} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
                </div>

                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>

        </section>


    </div>
  )
}

export default UserPage