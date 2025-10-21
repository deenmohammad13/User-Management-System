import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}
function Home() {
  const [data, setData]= useState<User[]>([])
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=> setData(res.data))
    .catch(err=> console.log(err));
  },[])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light pt-lg-5'>
      <h1 className='mb-4'>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4 mt-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/Create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d,i)=>(
              <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/Read/${d.id}`} className='btn btn-sm btn-info me-2'>View</Link>
                    <Link to={`/Update/${d.id}`} className='btn btn-sm btn-info me-2'>Edit</Link>
                    <button className='btn btn-sm btn-danger'>Delete</button>
                  </td>
              </tr>
            ))
            }
            
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default Home
