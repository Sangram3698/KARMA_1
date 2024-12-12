const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./db/db');
dotenv.config();
const app=express();

const port=process.env.PORT;

app.get("/",(req,res)=>{
  res.send("Hello");
})

connectDB();

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
