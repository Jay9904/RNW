import React, { useMemo, useState } from 'react'
import Header from './Header';
import Foter from './Foter';

export default function UseMemoEx() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    console.log('Main Components');

    const oneCounterFunction = () => {
        setCounterOne(counterOne + 1);
    }

    return (
        <>
            <Header />
            <h1>Use Memo Example</h1>
            <div className='d-flex gap-2'>
                <div className='border border-2 border-dark rounded p-3'>
                    <h4 className='text-center bg-light rounded'>{counterOne}</h4>
                    <button className='btn btn-dark btn-sm' onClick={oneCounterFunction}>Add</button>
                </div>
                <div className='border border-2 border-dark rounded p-3'>
                    <h4 className='text-center bg-light rounded'>{counterTwo}</h4>
                    <button className='btn btn-dark btn-sm' onClick={() => setCounterTwo(counterTwo + 1)}>Add</button>
                </div>
            </div>
            <Foter />
        </>
    )
}
