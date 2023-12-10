import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signupserver() {
    const [input, setInput] = useState({ email: "", password: "" });
    const [userData, setUserData] = useState();
    const [loginUser, setLoginUser] = useState();
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

    const handleLogin = (e) => {
        e.preventDefault();
        if (validation()) {
            const loginUser = userData.filter((item) => item.email === input.email && item.password === input.password);
            setLoginUser(loginUser);
            navigate('/shopping');
        }
    }

    const validation = () => {
        const newError = {};
        let valid = true;
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
                <h5 className='text-center'>Log In</h5>
                <form action="" onSubmit={handleLogin}>
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
                        value="Log In"
                    />
                </form>
                {loginUser && < p className='text-center text-success m-0'>Login Successfully </p>}
            </div >

        </>
    )
}

