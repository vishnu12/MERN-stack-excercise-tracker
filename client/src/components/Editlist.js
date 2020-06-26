import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Editlist = (props) => {
    const id=props.match.params.id
    console.log(id)

  const [values,setvalues]=useState({
      username:'',
      description:'',
      duration:0,
      date:new Date(),
      users:[]
  });

  useEffect(()=>{
      
    axios.get(`http://localhost:5000/exercise/${id}`)
    .then(res=>{
        setvalues({
            ...values,
            username:res.data.username,
            description:res.data.description,
            duration:res.data.duration,
            date:new Date(res.data.date)

        })
    })
    

  },[])

  const change=e=>{
     setvalues({
         ...values,
         [e.target.name]:e.target.value
     })
  }

  const submit=e=>{
      e.preventDefault();
      const data={
          username:values.username,
          description:values.description,
          duration:values.duration,
          date:values.date
      }

      axios.post(`http://localhost:5000/exercise/update/${id}`,data)
      .then(()=>{
          setvalues({
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
          })
      })
  }

console.log(values)
  return (
    <div className="col-md-6 m-auto align-items-center">
        <div className='col-md-6 m-auto'>
            <h2>Update Items</h2>
        </div>
        <form className='mt-5'>
            <div className='form-group'>
                <input type='text'  name='username' value={values.username} className='form-control' onChange={change}/>
            </div>
            <div className='form-group'>
                <input type='text'  name='description' value={values.description} className='form-control' onChange={change}/>
            </div>
            <div className='form-group'>
                <input type='number'  name='duration' value={values.duration} className='form-control' onChange={change}/>
            </div>
            <div className='form-group'>
                <input type='date'  name='date' value={values.date} className='form-control' onChange={change}/>
            </div>

            <div className='form-group'>
               <button className='btn btn-info form-control' type='submit' onClick={submit}>update</button>
            </div>
        </form>
        <div className='col-md-3 m-auto'>
            <Link to='/'><button className="btn btn-success">Back to home</button></Link>
        </div>
    </div>
  )
}

export default Editlist
