import React from 'react'
import { Link } from 'react-router-dom'

function Create() {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='name' className='form-control' placeholder='Enter E-mail'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Phone'/>
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
