import axios from 'axios';
import  { useEffect, useState } from 'react'
import  {Link, useNavigate, useParams}  from 'react-router-dom'


function Update() {
  //  const [data, setData]= useState<User | null>(null);
   const {id} = useParams();
   const navigate = useNavigate();
   const [values, setValues] = useState({
       name: '',
       email: '',
       phone: ''
     })
     const isFormValid = values.name && values.email && values.phone;

    useEffect(() => {
    if (id) { 
      axios.get(`http://localhost:3000/users/${id}`) 
        .then(res => {
          console.log(res.data); 
          setValues(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [id]); 

    const handleUpdate = (event) =>{
    event.preventDefault();

     if (!isFormValid) {
      alert('Please fill all fields');
      return;
    }
     axios.put('http://localhost:3000/users/'+id, values)
    .then(res=> {
      console.log(res)
      navigate('/');
    })
    .catch(err=> console.log(err));
  }

  return (
     <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>

         <form onSubmit={handleUpdate}>
          <div className='mb-3'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' 
            value={values.name}  onChange={ e => setValues({...values, name: e.target.value})}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter E-mail' 
            value={values.email}  onChange={ e => setValues({...values, email: e.target.value})}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone' 
            value={values.phone}  onChange={ e => setValues({...values, phone: e.target.value})}/>
          </div>
          
          <button type='submit' className='btn btn-success me-2'>Update</button>
          <Link to='/' className='btn btn-primary'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update
