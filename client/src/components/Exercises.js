import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Exercises = () => {

const [value,setValue]=useState([]);

useEffect(()=>{
   axios.get('http://localhost:5000/exercise')
   .then(res=>{
     setValue(res.data)

   })
  
   
},[])

const deleteItem=(id)=>{

   axios.delete(`http://localhost:5000/exercise/${id}`)
   .then(()=>{
     axios.get('http://localhost:5000/exercise')
     .then((res)=>{
         setValue(res.data)
     })
   })
}


  return (
    
      <div className='col-md-8 m-auto '>
      <table className='table table-striped table-bordered mt-5'>
        <thead className="text-white bg-dark">
          <tr>
            <td className='text-center'>User name</td>
            <td className='text-center'>Description</td>
            <td className='text-center'>Duration</td>
            <td className='text-center'>Date</td>
            <td className='text-center'>Modify</td>
          </tr>
          </thead>
          <tbody className='text-center'>
          
            {
              value.map((itm,k)=>{
                return(
                  <tr>
                  <td>{itm.username}</td>
                  <td>{itm.description}</td>
                  <td>{itm.duration}</td>
                  <td>{itm.date.substring(0,10)}</td>
                  <td><button className='btn btn-info'><Link to={`/update/${itm._id}`} className='text-white'>update</Link></button>
                  
                  <button className='btn btn-danger text-white ml-2' onClick={()=>deleteItem(itm._id)}>delete</button></td>
                  </tr>
                )
              })
            }
           
          </tbody>
      </table>
      </div>
    
  )
}
export default Exercises
