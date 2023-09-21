import React, { useState } from "react";
import img1 from "../Images/1.webp";
import img2 from "../Images/2.webp";
import img3 from "../Images/3.webp";
import img4 from "../Images/4.webp";
import img5 from "../Images/5.webp";
import img6 from "../Images/6.webp";
import img7 from "../Images/7.webp";
import img8 from "../Images/8.webp";
import img9 from "../Images/9.webp";
import img10 from "../Images/10.webp";

export default function Pagination() {
    const [product, setProduct] = useState([{
        img: img1,
        price: 4950,
        color: "Brown"
    },
    {
        img: img2,
        price: 4500,
        color: "White"
    },
    {
        img: img3,
        price: 4150,
        color: "Light Brown"
    },
    {
        img: img4,
        price: 3500,
        color: "White"
    },
    {
        img: img5,
        price: 4250,
        color: "Light Yellow"
    },
    {
        img: img6,
        price: 3850,
        color: "Light Pink"
    },
    {
        img: img7,
        price: 3750,
        color: "White"
    },
    {
        img: img8,
        price: 4150,
        color: "Black"
    },
    {
        img: img9,
        price: 4100,
        color: "Light Gray"
    },
    {
        img: img10,
        price: 3650,
        color: "Blue"
    }
    ]);

    return (
        <>
            <div className="container">
                <div className="row">
                    {product.map((product, index) => {
                        return (
                            <div className="col-3 mb-3" key={index}>
                                <img src={product.img} alt="{Image}" className="card-img-top img-fluid my-2 rounded rounded-3" />
                                <div className="card-body">
                                    <span className="badge bg-dark mb-2 d-block">New Arrival</span>
                                    <strong className="fw-semibold badge bg-success">Price : {product.price} /-</strong>
                                    <p>Color : {product.color}</p>
                                    <button className="btn btn-danger fw-semibold w-100">ADD TO CART</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="text-center mt-3">
                <ul className="list-unstyled rounded">
                    <li className="btn bg-danger-subtle rounded-0"><a href="#" className="text-decoration-none text-dark">Prev</a></li>
                    <li className="btn bg-danger-subtle rounded-0"><a href="#" className="text-decoration-none text-dark">1</a></li>
                    <li className="btn bg-danger-subtle rounded-0"><a href="#" className="text-decoration-none text-dark">2</a></li>
                    <li className="btn bg-danger-subtle rounded-0"><a href="#" className="text-decoration-none text-dark">3</a></li>
                    <li className="btn bg-danger-subtle rounded-0"><a href="#" className="text-decoration-none text-dark">Next</a></li>
                </ul>
            </div>
        </>
    );
}