import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Shopping() {
    const [products, setProducts] = useState();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error))
        axios.get('http://localhost:5000/cart')
            .then((response) => setCart(response.data))
            .catch((error) => console.log(error))
    }, [])

    const addtoCart = (item) => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        alert("Successfuly Added")
    }

    return (
        <>
            <div className="d-flex my-3 justify-content-around">
                <h4 className='text-center'>The Central mall</h4>
                <Link to={'/cart'}>
                    <button type="button" className="btn btn-outline-danger position-relative">Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart && cart.length}<span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </Link>

            </div>
            <div className="container">
                <div className="row gap-2 justify-content-center ">
                    {
                        products && products.map((item, index) => {
                            return <div className='card col-3 p-3' key={index}>
                                <img src={item.img} alt="" className='rounded' />
                                <h6 className='m-0'>{item.name}</h6>
                                <p className='m-0'>{item.type}</p>
                                <strong>Price : {item.price}</strong>
                                <button className='btn btn-outline-success btn-sm fw-bold' onClick={() => addtoCart(item)}>Add To Cart</button>
                            </div>
                        })
                    }
                </div>
            </div >
        </>
    )
}
