import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}
function Read() {
   const [data, setData]= useState<User | null>(null);
   const {id} = useParams();

    useEffect(() => {
    if (id) { 
      axios.get(`http://localhost:3000/users/${id}`) 
        .then(res => {
          console.log(res.data); 
          setData(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [id]); 

  return (
    
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5 rounded'>
        <h1>User Details</h1>
        
           {data ? ( 
          <div>
            <div className='mb-3'>
              <strong>Name: {data.name}</strong>
            </div>
            <div className='mb-3'>
              <strong>Email: {data.email}</strong> 
            </div>
            <div className='mb-3'>
              <strong>Phone: {data.phone}</strong> 
            </div>
          <Link to={`/Update/${id}`} className='btn btn-success ms-3'>Edit</Link>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
          </div>
           ): (<p>Loading user data...</p>)
           }
      </div>
    </div>
  )
}

export default Read
