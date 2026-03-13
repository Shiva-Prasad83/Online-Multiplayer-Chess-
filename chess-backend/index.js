require('dotenv').config();
const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const { authRouter } = require('./routes/auth.routes');
const mongoose = require('mongoose');

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api/v1/auth',authRouter);

const PORT=process.env.PORT||5000;
const MONGODB_URI=process.env.MONGODB_URI;
app.get("/",(req,res)=>res.send("Welcome to Chess Backend"));
app.listen(PORT,()=>console.log("Server is listening on port",PORT));

mongoose
.connect(MONGODB_URI)
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log("Error while connecting to DB",err.message));