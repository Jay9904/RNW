import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Login() {
    const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem('student')));
    const navigater = useNavigate();
    const [logInput, setLogInput] = useState({ userid: "", password: "" });
    const [error, setError] = useState();
    const { msg } = useParams();


    const handleChange = (e) => {
        setLogInput({ ...logInput, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginData.map((item) => {
            if (item.email === logInput.userid && item.password === logInput.password) {
                navigater(`/student`);
            } else {
                setError("Invalid Userid and Password!");
            }
        });
    }
    
    return (
        <>
            <div className='container'>
                <h3 className='text-center fw-bold'>Student Login</h3>
                {msg ? <p className='fw-bold text-warning bg-dark rounded p-1 text-center'>{msg}</p> : <></>}
                {error ? <p className='fw-bold text-warning bg-dark rounded p-1 text-center'>{error}</p> : <></>}

                <div className='col-4 mt-3 m-auto bg-offwhite p-3 rounded shadow-mn-1'>
                    <form action="" onSubmit={handleSubmit}>
                        <p className='fw-bold'>User Id :</p>
                        <input type="text" name='userid' className='form-control border-dark' placeholder='Enter Your User ID' onChange={handleChange} />
                        <p className='fw-bold mt-3'>Password :</p>
                        <input type="password" name='password' className='form-control border-dark' placeholder='Enter Your Password' onChange={handleChange} />
                        <button type='submit' className='btn btn-success mt-3 col-12'>Log In</button>
                        <p className='text-center my-2 py-2 fw-semibold border-top border-bottom border-dark'>If you are not registerd yet.</p>
                        <button onClick={() => { navigater("/signup") }} className='btn btn-danger col-12'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
