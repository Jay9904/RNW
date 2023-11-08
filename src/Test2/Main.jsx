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
import Sidebar from './Sidebar';

export default function Main() {
    const [product, setProduct] = useState([
        { name: 'Shirt', color: 'black', type: 'men', material: 'cotton', brand: 'snitch', img: shirtBlack },
        { name: 'Shirt', color: 'blue', type: 'men', material: 'cotton', brand: 'aristobrat', img: shirtBlue },
        { name: 'Shirt', color: 'white', type: 'men', material: 'polyster', brand: 'aristobrat', img: shirtWhite },
        { name: 'Shirt', color: 'red', type: 'men', material: 'cotton', brand: 'snith', img: shirtRed },
        { name: 'Shirt', color: 'black', type: 'men', material: 'cotton', brand: 'aristobrat', img: shirtBlack2 },
        { name: 'Shirt', color: 'butterscotch', type: 'men', material: 'polyster', brand: 'aristobrat', img: shirtButter },
        { name: 'Shirt', color: 'blue', type: 'men', material: 'cotton', brand: 'aristobrat', img: shirtTerenceBlue },
        { name: 'Shirt', color: 'slate', type: 'men', material: 'polyster', brand: 'snitch', img: shirtSlate },
    ]);

    const [filterData, setFilterData] = useState(product);


    const handleChange = (e) => {
        const brand = e.target.value;
        const newList = product.filter((item) => item.brand.toLocaleLowerCase().includes(brand.toLocaleLowerCase()));
        setFilterData(newList);
    }

    const handleOptionChange = (e) => {
        const color = e.target.value;
        const newList = product.filter((item) => {
            if (color.toLowerCase() === "all") {
                return true;
            }
            return item.color.toLowerCase() === color;
        });
        setFilterData(newList);
    }

    const handleMaterial = (e) => {
        const material = (e.target.value);
        const newList = product.filter((item) => {
            if (material === "all") {
                return true;
            }
            return item.material.toLowerCase() === material;
        });
        setFilterData(newList);
    }

    return (
        <>
            <Sidebar handleChange={handleChange} handleOptionChange={handleOptionChange} handleMaterial={handleMaterial} />
            <div className='container'>
                <div className='row '>
                    {
                        filterData && filterData.map((item, index) => {
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
