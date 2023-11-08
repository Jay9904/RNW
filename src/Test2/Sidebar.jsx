import React from 'react'
import { useState } from 'react';

export default function Sidebar(props) {

    const [color, setColor] = useState("");


    return (
        <div className='my-3 row'>
            <div className='imput-group d-flex col' >
                <input type="text" className='form-control border-dark' placeholder='Search By Brand' onChange={props.handleChange} />
                <button className='btn btn-dark'>Search</button>
            </div>
            <div className='col'>
                <span className='fw-bold'>Filter By Color : </span>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input border-dark"
                        type="radio"
                        name="RadioOptions"
                        id="radio0"
                        value="all"
                        checked={color === "all"}
                        onChange={props.handleOptionChange} />
                    <label className="form-check-label" htmlFor="radio0">All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input border-dark"
                        type="radio"
                        name="RadioOptions"
                        id="radio1"
                        value="red"
                        checked={color === "red"}
                        onChange={props.handleOptionChange} />
                    <label className="form-check-label" htmlFor="radio1">Red</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input border-dark"
                        type="radio"
                        name="RadioOptions"
                        id="radio2"
                        value="black"
                        checked={color === "black"}
                        onChange={props.handleOptionChange} />
                    <label className="form-check-label" htmlFor="radio2">Black</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input border-dark"
                        type="radio"
                        name="RadioOptions"
                        id="radio3"
                        value="blue"
                        checked={color === "blue"}
                        onChange={props.handleOptionChange} />
                    <label className="form-check-label" htmlFor="radio3">Blue</label>
                </div>
            </div>
            <div className='col'>
                <select name="" className='form-select border-dark' onChange={props.handleMaterial}>
                    <option value="all">Select Material</option>
                    <option value="cotton">Cotton</option>
                    <option value="polyster">Polyster</option>
                </select>
            </div>
        </div >
    )
}
