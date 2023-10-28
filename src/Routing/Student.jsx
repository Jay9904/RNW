import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
// import { Data } from './Data'

export default function Student() {
    const [stData, setStData] = useState(JSON.parse(localStorage.getItem("student")));
    const [search, setSearch] = useState("");

    const handleDelete = (e, index) => {
        e.preventDefault();
        setStData([...stData.slice(0, index), ...stData.slice(index + 1)]);
        // localStorage.setItem("student", stData);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const newList = stData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        setStData(newList);
    }

    return (
        <>
            <h4 className='text-center text-danger fw-bold'>Student List</h4>
            <div className='text-center mt-2 container'>
                <input type="text" value={search} placeholder='Search' className='form-control mt-3 w-50 m-auto' onChange={handleSearch} />
                <table className='table table-dark table-hover mt-4'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stData && stData.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Link className="btn btn-primary me-2 fw-semibold btn-sm" to={`/student/view/${index}`} >View</Link>
                                        <Link className="btn btn-success fw-semibold btn-sm me-2" to={`/student/edit/${index}`} >Edit</Link>
                                        <button className='btn btn-danger fw-semibold btn-sm' onClick={(e) => handleDelete(e, index)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </>

    )
}
