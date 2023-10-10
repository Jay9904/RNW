import React, { useEffect } from "react";
import { useState } from "react";

export default function FormPR() {
    const [input, setInput] = useState({ name: "", email: "", password: "", confirmPassword: "", number: "", degree: "", city: "", gender: "", hobbies: "", address: "" });
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("stData")) || [];
    });
    const [error, setError] = useState({});
    const [selectedOption, setSelectedOption] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState();


    useEffect(() => {
        localStorage.setItem("stData", JSON.stringify(data));
    }, [data]);

    // enter some text in input
    const handalChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    // handle check
    const handalCheck = (e) => {
        setSelectedOption(e.target.value);
        setInput({ ...input, [e.target.name]: selectedOption });
        console.log(selectedOption);
    }

    // handle edit
    const handleEdit = (e, index) => {
        e.preventDefault();
        setInput(data[index]);
        setIsEdit(true);
        setEditId(index);
    };

    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validation()) {

            if (isEdit) {

                const newList = data.map((st, index) => {
                    if (index == editId) {
                        return input;
                    }
                    return st;
                });
                setData(newList);
                setIsEdit(false);
            } else {
                setData([...data, input]);
            };
        }

        e.target.reset();
    }

    const validation = () => {
        const newError = {};
        if (!input.name.trim()) {
            newError.name = 'Username Required!';
        }
        if (!input.email.trim()) {
            newError.email = 'Email Required!';
        }
        if (!input.password.trim()) {
            newError.password = "Password Required!";
        }
        if (!input.confirmPassword.trim()) {
            newError.confirmPassword = "Password Required!";
        }
        if (input.confirmPassword !== input.password) {
            newError.confirmPassword = "Does not match with Password!";
        }
        if (!input.number.trim()) {
            newError.number = "Mobile Number Required";
        }
        if (input.number.length != 10) {
            newError.number = "Mobile Number Must be 10 digit";
        }
        if (!input.degree.trim()) {
            newError.degree = "Degree Required!";
        }
        if (!input.city.trim()) {
            newError.city = "City Required!";
        }
        //  gender panding
        if (!input.hobbies.trim()) {
            newError.hobbies = "Hobbies Required!";
        }
        if (!input.address.trim()) {
            newError.address = "Hobbies Required!";
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    // handle delete
    const handleDelete = (index) => {
        const newData = [...data.slice(0, index), ...data.slice(index + 1)];
        setData(newData);
    };


    return <>
        {/* <h3 className="text-center">Registration Form</h3> */}
        <div className="container mt-4 col-5">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" value={input.name || ""} className="form-control border-danger" placeholder="Enter Your Username" onChange={handalChange} />{error.name && <span className=" text-danger fw-semibold">{error.name}</span>}
                <input type="email" name="email" value={input.email} className="form-control mt-3 border-danger" placeholder="Enter Your Email Address" onChange={handalChange} />{error.email && <span className=" text-danger fw-semibold">{error.email}</span>}
                <input type="password" name="password" value={input.password} className="form-control mt-3 border-danger" placeholder="Enter Your Password" onChange={handalChange} />{error.password && <span className=" text-danger fw-semibold">{error.password}</span>}
                <input type="password" name="confirmPassword" value={input.confirmPassword} className="form-control mt-3 border-danger" placeholder="Confirm Password" onChange={handalChange} />{error.confirmPassword && <span className=" text-danger fw-semibold">{error.confirmPassword}</span>}
                <input type="number" name="number" value={input.number} className="form-control mt-3 border-danger" placeholder="Enter Your Mobile Number" onChange={handalChange} />{error.number && <span className=" text-danger fw-semibold">{error.number}</span>}
                <select name="degree" value={input.degree} className="form-select mt-3 border-danger" onChange={handalChange} >
                    <option value="Select Your Degree">Select Your Degree</option>
                    <option value="BCA">BCA</option>
                    <option value="BCOM">BCOM</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="MCOM">MCOM</option>
                    <option value="PHD">PHD</option>
                    <option value="CS">CS</option>
                    <option value="CA">CA</option>
                </select>{error.degree && <span className=" text-danger fw-semibold">{error.degree}</span>}
                <select name="city" value={input.city} className="form-select mt-3 border-danger" onChange={handalChange}>
                    <option value="Select Your City">Select Your City</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahemdabad">Ahemdabad</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Mahesana">Mahesana</option>
                    <option value="Patan">Patan</option>
                    <option value="Navsari">Navsari</option>
                </select>{error.city && <span className=" text-danger fw-semibold">{error.city}</span>}
                <div className="mt-3 border-danger border rounded p-2">
                    <p className="d-inline me-2">Select Gender :</p>
                    <div className="form-check form-check-inline">
                        <label htmlFor="male"><input type="radio" value="male" checked={selectedOption === "male"} name="gender" className="form-check-input" id="male" onChange={handalCheck} />Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="female"><input type="radio" value='female' name="gender" checked={selectedOption === "female"} className="form-check-input" id="female" onChange={handalCheck} />Female</label>
                    </div>
                </div>{error.gender && <span className=" text-danger fw-semibold">{error.gender}</span>}
                <input type="text" name="hobbies" value={input.hobbies} className="mt-3 form-control border-danger" placeholder="Enter Your Hobbies" onChange={handalChange} />{error.hobbies && <span className=" text-danger fw-semibold">{error.hobbies}</span>}
                <textarea name="address" value={input.address} cols="30" rows="3" placeholder="Enter Your Address" className="form-control border-danger mt-3" onChange={handalChange}></textarea>{error.address && <span className=" text-danger fw-semibold">{error.address}</span>}
                <button className="btn btn-danger mt-3 w-100">{isEdit ? "Update" : "Submit"}</button>
            </form>
        </div>
        {/* table */}
        <div className="container mt-4">
            <table className="table table-danger text-center">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Degree</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.degree}</td>
                                <td>{item.city}</td>
                                <td>{item.gender}</td>
                                <td>{item.hobbies}</td>
                                <td>{item.address}</td>
                                <td><button className="btn btn-success me-2" onClick={(e) => { handleEdit(e, index) }}>Edit</button><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
        </div>
    </>
}