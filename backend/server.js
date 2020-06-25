const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
require('dotenv/config')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{console.log('mongoDB connection established')})

const userRout=require('./routes/user');
const exerciseRoute=require('./routes/exercise');

app.use('/user',userRout);
app.use('/exercise',exerciseRoute);


const port=process.env.PORT || 3001
app.listen(port,()=>{console.log(`server running on port ${port}`)})