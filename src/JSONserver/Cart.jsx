import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



export default function Cart() {
    const [cartProduct, setCartProduct] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then((response) => setCartProduct(response.data))
            .catch((error) => console.log(error))
    }, [])

    const removeItem = (item) => {
        fetch(`http://localhost:5000/cart/${item.id}`, {
            method: 'DELETE',
        });
        alert("Remove Successfully")
    }


    return (
        <>
            <h4 className='text-center fw-bolder'>Your Cart</h4>
            <div className="container mt-3">
                <div className="row gap-2 justify-content-center ">
                    {
                        cartProduct && cartProduct.map((item, index) => {
                            return <div className='card col-3 p-3' key={index}>
                                <img src={item.img} alt="" className='rounded' />
                                <h6 className='m-0'>{item.name}</h6>
                                <p className='m-0'>{item.type}</p>
                                <strong>Price : {item.price}</strong>
                                <button className='btn btn-outline-success btn-sm fw-bold' >Buy Now</button>
                                <button className='btn btn-outline-danger mt-2 btn-sm fw-bold' onClick={() => removeItem(item)} >Remove</button>
                            </div>
                        })
                    }
                </div>
            </div >
            <div className='text-center'>
                <Link className='btn btn-success btn-sm fw-bolder' to={'/shopping'}>Shopping</Link>
            </div>
        </>
    )
}
