import React from 'react'
import { useState } from 'react';

export default function PR() {

    const [data, setData] = useState([
        { name: "Jay", address: "Surat", grades: 'A', gender: "Male", },
        { name: "Aakash", address: "Bharuch", grades: 'B', gender: "Male", },
        { name: "Priyanka", address: "Surat", grades: 'C', gender: "Female", },
        { name: "Harsh", address: "Ankleshwar", grades: 'C', gender: "Male", },
        { name: "Riya", address: "Bharuch", grades: 'A', gender: "Female", },
        { name: "Ankita", address: "Bharuch", grades: 'B', gender: "Female", }
    ]);
    const [filterData, setFilterData] = useState(data);
    const [gender, setGender] = useState("all");
    const [city, setCity] = useState("all");

    const handleRadio = (e) => {
        setGender(e.target.value);
        const newList = data.filter((item) => {
            if (gender === "all") {
                return true;
            }
            if (gender.toLowerCase() === "male") {
                return item.gender.toLowerCase() === gender;
            }
            if (gender.toLowerCase() === "female") {
                return item.gender.toLowerCase() === gender;
            }

        });
        setFilterData(newList);
    }

    const handleSearch = (e) => {
        const name = e.target.value;
        const newList = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
        setFilterData(newList);
    }

    const handleSelect = (e) => {
        const city = e.target.value;
        const newList = data.filter((item) => {
            if (city === "all") {
                return true;
            }
            return item.address === city;
        });
        setFilterData(newList);
    }

    return (
        <>
            <div className='container d-flex justify-content-around mt-2'>
                <div>
                    {/* Gender filter */}
                    <div className="form-check form-check-inline">
                        <input type="radio"
                            className='form-check-input'
                            id='all'
                            name='gender'
                            value="all"
                            onChange={handleRadio}
                            checked={gender === "all"}
                        />
                        <label htmlFor="all" className='form-check-lable fw-bold'>All</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                            className='form-check-input'
                            id='male'
                            name='gender'
                            value="male"
                            onChange={handleRadio}
                            checked={gender === "male"}
                        />
                        <label htmlFor="male" className='form-check-lable fw-bold'>Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className='form-check-input'
                            id='female'
                            name='gender'
                            value="female"
                            onChange={handleRadio}
                            checked={gender === "female"}
                        />
                        <label htmlFor="female" className='form-check-lable fw-bold'>Female</label>
                    </div>
                </div>
                {/* Search */}
                <input type="text" placeholder='Search By Name' className='form-control w-25' onChange={handleSearch} />
                {/* dropdown filter */}
                <div className='col-4'>
                    <select className='form-select' name='address' onChange={handleSelect} >
                        <option value="all">Selctt city</option>
                        <option value="Surat">Surat</option>
                        <option value="Bharuch">Bharuch</option>
                        <option value="Ankleshwar">Ankleshwar</option>
                    </select>
                </div>

            </div >
            <table className='table text-center mt-3'>
                <thead className='fw-bold'>
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Grades</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterData && filterData.map((item, index) => {
                            return <tr key={index}>
                                <td key={index}>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.grades}</td>
                                <td>{item.gender}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
