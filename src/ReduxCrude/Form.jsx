import React, { useState } from 'react'
import { useSelector } from 'react-redux';


export default function Form() {
    // const data = useSelector((state) => state);
    // console.log(data);
    const [input, setInput] = useState([{ name: "", email: "", number: "", state: "" }]);
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container col-6 border rounded border-dark py-4">
                <h4 className='text-center'>Enter Your Details</h4>
                <form>
                    <input
                        type="text"
                        name='name'
                        className='form-control border border-dark'
                        placeholder='Enter Full Name'
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name='email'
                        className='form-control border border-dark my-3'
                        placeholder='Email Address'
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name='number'
                        className='form-control border border-dark'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                    />
                    <select name="state" id="" className='form-select border border-dark my-3' onChange={handleChange}>
                        <option value="">Select Your State</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Maharastra">Maharastra</option>
                        <option value="Utterpradesh">Utterpradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Andhrapradesh">Andhra Pradesh</option>
                        <option value="Goa">Goa</option>
                    </select>
                    <input type="submit" className='btn btn-success col-12 fw-bold' />
                </form>
            </div>
        </>
    )
}
