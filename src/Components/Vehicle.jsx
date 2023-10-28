import React from 'react';
import './style.css';


export default function Vehicle() {




    return (
        <>
            <h3 className='text-center fw-bold shadow py-3 bg-offwhite' id='text'>Vehicle Registration Form</h3>
            <div className='container shadow-mn p-3 mt-5 bg-offwhite rounded'>
                <form action="">
                    <p className='fw-semibold'>Name :</p>
                    <div className='hstack gap-2'>
                        <input type="text" placeholder='First Name' className='form-control-mn shadow border-dark col' />
                        <input type="text" placeholder='Last Name' className='form-control-mn shadow border-dark col' />
                    </div>
                    <p className='fw-semibold my-3'>Address :</p>
                    <div className='hstack gap-3 my-3'>
                        <input type="text" placeholder='House No and Society name' className='form-control-mn shadow border-dark' />
                        <input type="text" placeholder='Street Address' className='form-control-mn shadow border-dark' />
                    </div>
                    <div className='hstack gap-2 my-3'>
                        <input type="text" placeholder='Town' className='form-control-mn border-dark shadow col' />
                        <input type="text" placeholder='Country' className='form-control-mn border-dark shadow col' />
                        <input type="text" placeholder='Pin code' className='form-control-mn border-dark shadow col' />
                    </div>
                    <p className='fw-semibold my-3'>Vehicle Name and Type :</p>
                    <div className='hstack gap-2 my-3'>
                        <input type="text" placeholder='Company Name' className='form-control-mn border-dark shadow col' />
                        <input type="text" placeholder='Vehicle Type - sedan/SUV' className='form-control-mn shadow border-dark col' />
                    </div>
                    <p className='fw-semibold my-3'>Contact Details :</p>
                    <div className='hstack gap-2 my-3'>
                        <input type="text" placeholder='Mobile No' className='form-control-mn border-dark shadow col' />
                        <input type="text" placeholder='Home Land Line Number' className='form-control-mn shadow border-dark col' />
                        <input type="text" placeholder='Email Address' className='form-control-mn border-dark shadow col' />
                    </div>
                    <p className='fw-bold my-3'><input type="checkbox" className='form-check-input me-3 border-dark' />Above Email Address will be used to acknowledge Registration on the ISR of Information submitted. if it is left blank you WILL NOT receive acknoledgement.</p>
                    <div className='text-end'>
                        <button className='btn btn-success fw-semibold shadow-mn me-3'>Save & Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}
