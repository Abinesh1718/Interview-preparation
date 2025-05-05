import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [formData, setformData] = useState({
        name: "",
        age: "",
        place: "",
        email: ""
    })

    const handleSubmit = () => {
        alert(`Hi ${formData.name}`)

    }
    const navigate = useNavigate()
    return (
        <div>
            <h1 className='headrss'>Login Form</h1>
            <title>Login Form</title>

            <button onClick={() => navigate("/")} > Go Produc Page</button>

            <form onSubmit={handleSubmit}>
                <div className="container" >
                    <label>Name</label>
                    <input type='text' value={formData.name} onChange={(e) => setformData((prev) => ({ ...prev, name: e.target.value }))} />
                    <label>Age</label>
                    <input type='text' value={formData.age} onChange={(e) => setformData((prev) => ({ ...prev, age: e.target.value }))} />
                    <label>Place</label>
                    <input type='text' value={formData.place} onChange={(e) => setformData((prev) => ({ ...prev, place: e.target.value }))} />
                    <label>Email</label>
                    <input type='text' value={formData.email} onChange={(e) => setformData((prev) => ({ ...prev, email: e.target.value }))} />
                    <button>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Login