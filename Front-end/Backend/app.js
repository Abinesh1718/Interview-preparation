const express =require('express');
require("dotenv").config()
const  route  = require('./routes/route');
const connectDatabase = require('./config');

connectDatabase()

const app=express()
app.use(express.json())

app.use("/",route)


app.listen(process.env.PORT,()=>{
    console.log("Server Startedd",process.env.PORT);
    
})