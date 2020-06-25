import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Exercises from '../components/Exercises'

const CreateExecise = () => {

  const [values,setValues]=useState({
      uname:'',
      desc:'',
      num:0,
      date:new Date(),
      user:[]
  })

  useEffect(()=>{

 axios.get('http://localhost:5000/user').then(res=>{

    console.log(res.data)
    setValues({
        ...values,
        user:res.data.map(user=>user.username)
    })
    
 })

  },[])

  

  const option=values.user.map((value,k)=>{
  return <option value={value}>{value}</option>
  })

    const change=e=>{
       setValues({
           ...values,
           [e.target.name]:e.target.value
       })
    }

const submit=e=>{
    e.preventDefault();
    const data={
        username:values.uname,
        description:values.desc,
        duration:values.num,
        date:values.date
    }
    
    axios.post('http://localhost:5000/exercise/add',data).then((res)=>{
        console.log(res)
    }).catch(err=>console.log(err))

}

  return (
    <div className="mt-5 col-md-6 m-auto align-items-center">
        <div className="col-md-6 m-auto mt-5 mb-5">
              <h2>Add Exercise</h2>
        </div>
      <form onSubmit={submit} className="mt-5">
          <div className='form-group'>
              <label className="text-align-center">Username</label>
              <select name='uname' className="form-control" onChange={change}>
                {option}
              </select>
          </div>
          <div className='form-group'>
              <label>Description</label>
              <input type='text' className='form-control' name='desc' onChange={change}/>
          </div>
          <div className='form-group'>
          <label>Duration</label>
              <input type='number' className='form-control' name='num' onChange={change}/>
          </div>
          <div className='form-group'>
          <label>Date</label>
              <input type='date' className='form-control' name='date' onChange={change}/>
          </div>

          <div className='form-group '>
         
              <button type='sunmit' className='btn btn-info form-control'>Add</button>
          </div>
      </form>
    </div>
  )
}
export default CreateExecise
