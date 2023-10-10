import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function LocalStorage() {
    const [input, setInput] = useState({ name: "" });
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("student")) || [];
    });

    // use reff
    const notice = useRef();
    const addUpdate = useRef();

    useEffect(() => {
        localStorage.setItem("student", JSON.stringify(data));
    }, [data])

    // handle Change
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    // handel Submite
    const handleSubmit = (e) => {
        if (input.name === "") {
            e.preventDefault();
            notice.current.innerHTML = "Fill Both Compelsery";
            console.log(notice);
        } else {
            e.preventDefault();
            setData([...data, input]);
            localStorage.setItem("student", JSON.stringify(data));
            e.target.reset();
            notice.current.innerHTML = "";
        }

    }

    // handle edit
    const handleEdit = (item, index) => {
        addUpdate.current.innerHTML = "Update";
    }

    // handle delete
    const handleDelete = (index) => {
        const newData = [...data.slice(0, index), ...data.slice(index + 1)];
        setData(newData);
    }

    return <>
        <center>
            <h3>Form</h3>
            <form action="" className="col-6" onSubmit={handleSubmit}>
                <span ref={notice} className="text-start text-danger fw-bold"></span>
                <input type="text" name="name" className="form-control mb-3 border-dark" placeholder="Enter name" onChange={handleChange} />
                <input type="email" name="email" className="form-control border-dark mb-3" placeholder="Enter Email Address" onChange={handleChange} />
                <button className="btn btn-success px-4" ref={addUpdate}>Add</button>
            </form>

            <div className="container">
                <table className="table table-warning mt-3 text-center ">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => {
                            return <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><button className="btn btn-success me-2" onClick={() => handleEdit(item, index)}>Edit</button><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
                                </tr>
                            </>
                        })}

                    </tbody>
                </table>
            </div>
        </center>

    </>
}