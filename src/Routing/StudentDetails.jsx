import React from 'react'
import { useState } from 'react';
import { Data } from './Data'
import { useParams } from 'react-router-dom';

export default function StudentDetails() {
  const [stdata, setStData] = useState(Data);
  const userID = useParams();
  const id = userID.id;

  return (<>
    <h4 className='text-center text-danger fw-bold'>Student Details</h4>
    <div className="container">
      <ul className='list-group list-unstyled fw-semibold fs-5'>
        <li className='list-item border-bottom my-2 border-dark'>Name : <span className='fw-bold'>{stdata[id].name}</span></li>
        <li className='list-item border-bottom my-2 border-dark'>Email : <span className='fw-bold'>{stdata[id].email}</span></li>
        <li className='list-item border-bottom my-2 border-dark'>Addrass : <span className='fw-bold'>{stdata[id].addrass}</span></li>
      </ul>
    </div>


  </>

  )
}
