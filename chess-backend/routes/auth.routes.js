const express=require('express');

const authRouter=express.Router();
const {login,signup}=require('../controllers/auth.controller');

authRouter.post("/login",login);
authRouter.post("/signup",signup);
authRouter.post("/logout",(req,res)=>res.sendStatus(200));
authRouter.post("/refresh",(req,res)=>res.sendStatus(200));
authRouter.get("/me",(req,res)=>res.sendStatus(200));
module.exports={authRouter};