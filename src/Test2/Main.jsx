import React, { useEffect } from 'react'
import { useState } from 'react';

// imges
import shirtBlack from './img/LuxuryDressShirt_Black_5_900x.jpg';
import shirtBlue from './img/LuxuryDressShirt_MidnightBlue_10_900x.jpg';
import shirtWhite from './img/LuxuryDressShirt_Whitepaisley_3_900x.jpg';
import shirtRed from './img/PiqueShirt_Salsa_Studio1_540x.jpg';
import shirtBlack2 from './img/TencelShirt_Black_New1_540x.jpg';
import shirtButter from './img/TencelShirt_Butterscotch4_540x.jpg';
import shirtTerenceBlue from './img/TencelShirt_MediterraneanBlue4_540x.jpg';
import shirtSlate from './img/TencelShirt_Sahara_6_540x.jpg';

export default function Main() {
    const [product, setProduct] = useState([
        { name: 'Shirt', color: 'black', type: 'men', material: 'cotten', brand: 'snitch', img: shirtBlack },
        { name: 'Shirt', color: 'blue', type: 'men', material: 'cotten', brand: 'aristobrat', img: shirtBlue },
        { name: 'Shirt', color: 'white', type: 'men', material: 'polyster', brand: 'aristobrat', img: shirtWhite },
        { name: 'Shirt', color: 'red', type: 'men', material: 'cotten', brand: 'snith', img: shirtRed },
        { name: 'Shirt', color: 'black', type: 'men', material: 'cotten', brand: 'aristobrat', img: shirtBlack2 },
        { name: 'Shirt', color: 'butterscotch', type: 'men', material: 'polyster', brand: 'aristobrat', img: shirtButter },
        { name: 'Shirt', color: 'blue', type: 'men', material: 'cotten', brand: 'aristobrat', img: shirtTerenceBlue },
        { name: 'Shirt', color: 'slate', type: 'men', material: 'polyster', brand: 'snitch', img: shirtSlate },
    ]);

    const [color, setColor] = useState("");
    const [material, setMaterial] = useState("");

    useEffect(() => {
        console.log("ff");
    }, [color])

    const handleChange = (e) => {
        const brand = e.target.value;
        const newList = product.filter((item) => item.brand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()));
        setProduct(newList);
    }

    const handleOptionChange = (e) => {
        setColor(e.target.value);
        const newList = product.filter((item) => {
            if (color.toLowerCase() === "") {
                return item;
            }
            else if (item.color.toLowerCase() === color.toLowerCase()) {
                return item;
            }
        });
        setProduct(newList);
    }

    const handleMaterial = (e) => {
        setMaterial(e.target.value);
        const newList = product.filter((item) => item.material.toLocaleLowerCase().includes(material.toLocaleLowerCase()));
        setProduct(newList);
    }

    return (
        <>
            <div className='my-3 row'>
                <div className='imput-group d-flex col' >
                    <input type="text" className='form-control border-dark' placeholder='Search By Brand' onChange={handleChange} />
                    <button className='btn btn-dark'>Search</button>
                </div>
                <div className='col'>
                    <span className='fw-bold'>Filter By Color : </span>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input border-dark"
                            type="radio"
                            name="RadioOptions"
                            id="radio0"
                            value="All"
                            checked={color === "All"}
                            onChange={handleOptionChange} />
                        <label class="form-check-label" for="radio0">All</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input border-dark"
                            type="radio"
                            name="RadioOptions"
                            id="radio1"
                            value="Red"
                            checked={color === "Red"}
                            onChange={handleOptionChange} />
                        <label class="form-check-label" for="radio1">Red</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input border-dark"
                            type="radio"
                            name="RadioOptions"
                            id="radio2"
                            value="Black"
                            checked={color === "Black"}
                            onChange={handleOptionChange} />
                        <label class="form-check-label" for="radio2">Black</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input border-dark"
                            type="radio"
                            name="RadioOptions"
                            id="radio3"
                            value="Blue"
                            checked={color === "Blue"}
                            onChange={handleOptionChange} />
                        <label class="form-check-label" for="radio3">Blue</label>
                    </div>
                </div>
                <div className='col'>
                    <select name="" value={material} className='form-select border-dark' onChange={handleMaterial}>
                        <option value="">Select Material</option>
                        <option value="cotton">Cotton</option>
                        <option value="Polyster">Polyster</option>
                    </select>
                </div>
            </div >
            <div className='container'>
                <div className='row '>
                    {
                        product && product.map((item, index) => {
                            return <>
                                <div className='col-4 p-2 shadow' key={index}>
                                    <img src={item.img} alt="" className='img-fluid' />
                                    <div className='px-3'>
                                        <p className='mt-2 fw-bold'>{item.brand.toUpperCase()}</p>
                                        <p>Color : <span className='fw-bold'>{item.color.toUpperCase()}</span></p>
                                        <p className='m-0'>Material : <span className='fw-bold'>{item.material.toUpperCase()}</span></p>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}
