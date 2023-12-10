import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signupserver() {
    const [input, setInput] = useState({ name: "", email: "", password: "" });
    const [userData, setUserData] = useState();
    const [error, setError] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/signup')
            .then((response) => response.json())
            .then((json) => setUserData(json));
    }, [])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmite = (e) => {
        e.preventDefault();
        if (validation()) {
            fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(input),
            })
            alert("Sign Up Successfully");
            navigate('/login')
        }
    }

    const validation = () => {
        const newError = {};
        let valid = true;
        if (input.name.trim() === "") {
            newError.name = "Required!";
            valid = false;
        }
        if (input.email.trim() === "") {
            newError.email = "Required!";
            valid = false;
        }
        if (input.password.trim() === "") {
            newError.password = "Required!";
            valid = false;
        }
        setError(newError);
        return valid;
    }

    return (
        <>
            <h3 className='text-center fw-bold'>JSON SERVER</h3>
            <div className='border border-dark rounded col-4 m-auto p-3 border-2'>
                <h5 className='text-center'>Sign UP</h5>
                <form action="" onSubmit={handleSubmite}>
                    <div className='my-3'>
                        {error.name && <strong className='text-danger'>{error.name}</strong>}
                        <input
                            type="text"
                            className='form-control border-danger'
                            placeholder='Enter Your Name'
                            name='name'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-3">
                        {error.email && <strong className='text-danger'>{error.email}</strong>}
                        <input
                            type="email"
                            className='form-control border-danger'
                            placeholder='Enter Your Email'
                            name='email'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-3">
                        {error.password && <strong className='text-danger'>{error.password}</strong>}
                        <input
                            type="password"
                            className='form-control border-danger'
                            placeholder='Enter Your Password'
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="submit"
                        className='btn text-success border-success border-2 w-100 btn-sm fw-bold'
                        value="Sign Up"
                    />
                </form>
                <Link className='btn btn-outline-danger btn-sm mt-3 w-100 fw-bolder border-2' to={'/login'} >Log In</Link>
            </div>
        </>
    )
}
