import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate();
    const [input, setInput] = useState({ name: "", email: "", address: "", password: "", confirmPassword: "" });
    const [error, setError] = useState({});
   



    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let student = JSON.parse(localStorage.getItem('student'))
        if (student == null) {
            student = []
            student.push(input)
            localStorage.setItem('student', JSON.stringify(student))
        } else {
            student.push(input)
            localStorage.setItem('student', JSON.stringify(student))
        }
        navigate('/login')
    }

    const validation = () => {
        const newList = {};
        if (!input.name.trim()) {
            newList.name = "Required!";
        }
        if (!input.email.trim()) {
            newList.email = "Required!";
        }
        if (!input.password.trim()) {
            newList.password = "Required!";
        }
        if (!input.confirmPassword.trim()) {
            newList.confirmPassword = "Required!";
        }
        if (input.password === input.confirmPassword) {
            newList.confirmPassword = "Not Match with password!";
        }
        setError(newList);
        return Object.keys(newList).length === 0;
    }

    return (
        <>
            <div className='container'>
                <h3 className='text-center fw-bold '>Student Sign Up</h3>
                <div className='col-4 mt-3 m-auto bg-offwhite p-3 rounded shadow-mn-1'>
                    <form action="" onSubmit={handleSubmit}>
                        <p className='fw-bold'>Name : {error.name ? <span className='text-danger'>{error.name}</span> : <></>}</p>
                        <input
                            type="text"
                            name="name"
                            className='form-control border-dark'
                            // value={input.name || ""}
                            placeholder='Enter Your Name'
                            onChange={handleChange} />
                        <p className='fw-bold mt-3'>Email ID : {error.name ? <span className='text-danger'>{error.email}</span> : <></>}</p>
                        <input type="email"
                            name='email'
                            // value={input.email}
                            className='form-control border-dark'
                            placeholder='Enter Your Email ID'
                            onChange={handleChange} />
                        <p className='fw-bold mt-3'>Address : {error.name ? <span className='text-danger'>{error.address}</span> : <></>}</p>
                        <input
                            type="text"
                            name='address'
                            // value={input.address}
                            className='form-control border-dark'
                            placeholder='Enter Your State'
                            onChange={handleChange} />
                        <p className='fw-bold mt-3'>Password : {error.name ? <span className='text-danger'>{error.password}</span> : <></>}</p>
                        <input
                            type="password"
                            name='password'
                            // value={input.password}
                            className='form-control border-dark'
                            placeholder='Enter Your Password'
                            onChange={handleChange} />
                        <p className='fw-bold mt-3'>Confirm Password : {error.name ? <span className='text-danger'>{error.confirmPassword}</span> : <></>}</p>
                        <input
                            type="password"
                            name='confirmPassword'
                            // value={input.confirmPassword}
                            className='form-control border-dark'
                            placeholder='Enter Your Confirm Password'
                            onChange={handleChange} />
                        <button type='submit' className='btn btn-success mt-3 col-12'>sign up</button>
                        <p className='text-center my-2 py-2 fw-semibold border-top border-bottom border-dark'>If you are alredy Registred.</p>
                        {/* <button onClick={() => { navigate("/login") }} className='btn btn-danger col-12 '>Log In</button> */}
                        {/* <Link  to={}>Signup</Link> */}
                    </form>
                </div>
            </div>
        </>
    )
}
