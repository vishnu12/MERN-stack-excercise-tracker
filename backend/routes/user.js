const express=require('express');
const router=express.Router();
const User=require('../model/User')

router.get('/',(req,res)=>{
  User.find()
  .then(users=>res.json(users))
  .catch(err=>res.status(404).json('Error'+err))
})

router.post('/add',(req,res)=>{
    const username=req.body.username;
    const newUser =new User({username})
    newUser.save()
    .then(()=>res.json('new user added!'))
    .catch(err=>res.status(404).json('Error'+err))
})

module.exports=router;