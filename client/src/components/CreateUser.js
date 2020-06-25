import React,{useState,useEffect} from 'react'
import axios from 'axios'
const CreateUser = () => {

const [userName,setUserName]=useState('');

const change=e=>{
   setUserName(e.target.value)
   
}

const submit=(e)=>{
e.preventDefault();
const data={
    username:userName
}

console.log(data)

axios.post('http://localhost:5000/user/add',data).then(res=>{
    console.log(res.data)
    setUserName('')
})



}
  return (
    <div className="mt-5 col-md-6 m-auto">
      <h2>Create User</h2><br/>
      
      <form onSubmit={submit}>
          <div className="form-group">
          <input type="text" id="input" value={userName} className="form-control" onChange={change} />
          </div>
          
         <div className="form-group">
             <button className="btn btn-info" type='submit' >Create</button>
         </div>
      </form>
    </div>
  )
}
export default CreateUser
