import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function UpdateUser() {
    const [input, setInput] = useState({ name: "", email: "", address: "", password: "" });
    const [data, setData] = useState(JSON.parse(localStorage.getItem("student")));
    const nav = useNavigate();
    const user = useParams();
    const [userID, setUserId] = useState(user.id);
    const [isEdit, setIsEdit] = useState(false);


    useEffect(() => {
        setInput(data[userID]);
        setIsEdit(true);
    }, [user]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            const newList = data.map((st, index) => {
                if (index == userID) {
                    return input;
                }
                return st;
            });
            localStorage.setItem("student", JSON.stringify(newList));
            console.log()
            setIsEdit(false);
        }
        nav('/student');
    }
    

    return (
        <>
            <div className='container'>
                <h3 className='text-center fw-bold '>Student Sign Up</h3>
                <div className='col-4 mt-3 m-auto bg-offwhite p-3 rounded shadow-mn-1'>
                    <form action="" onSubmit={handleSubmit}>
                        <p className='fw-bold'>Name : </p>
                        <input
                            type="text"
                            name="name"
                            className='form-control border-dark'
                            value={input.name || ""}
                            placeholder='Enter Your Name'
                            onChange={handleChange}
                        />
                        <p className='fw-bold mt-3'>Email ID : </p>
                        <input type="email"
                            name='email'
                            value={input.email}
                            className='form-control border-dark'
                            placeholder='Enter Your Email ID'
                            onChange={handleChange}
                        />
                        <p className='fw-bold mt-3'>Address : </p>
                        <input
                            type="text"
                            name='address'
                            value={input.address}
                            className='form-control border-dark'
                            placeholder='Enter Your State'
                            onChange={handleChange}
                        />
                        <p className='fw-bold mt-3'>Password : </p>
                        <input
                            type="password"
                            name='password'
                            value={input.password}
                            className='form-control border-dark'
                            placeholder='Enter Your Password'
                            onChange={handleChange}
                        />
                        <button type='submit' className='btn btn-success mt-3 col-12'>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}
