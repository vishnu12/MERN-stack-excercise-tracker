const express=require('express');
const router=express.Router();
const Exercise = require('../model/Exercise');

router.get('/',(req,res)=>{
    Exercise.find()
    .then(excercise=>res.json(excercise))
    .catch(err=>res.status(404).json('Eroor'+err))
})

router.post('/add',(req,res)=>{
    const username=req.body.username;
    const description =req.body.description;
    const duration =Number(req.body.duration);
    const date=Date.parse(req.body.date);

    const newExercise=new Exercise({
        username,
        description,
        duration,
        date
    })
    newExercise.save()
    .then(()=>res.json('Exercise added'))
    .catch(err=>res.status(404).json('Error'+err))
})

router.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then((excercise)=>res.json(excercise))
    .catch(err=>console.log(err))
})

router.delete('/:id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then(excercise=>{
        excercise.username=req.body.username;
        excercise.description=req.body.description;
        excercise.duration=Number(req.body.duration);
        excercise.date=Date.parse(req.body.date);

        excercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
})

module.exports=router;