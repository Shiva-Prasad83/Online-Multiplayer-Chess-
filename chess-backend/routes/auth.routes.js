const express=require('express');

const authRouter=express.Router();
const {login,signup,fetchMe, logout, refresh}=require('../controllers/auth.controller');
const { verifyAuth } = require('../middlewares/verifyAuth');

authRouter.post("/login",login);
authRouter.post("/signup",signup);
authRouter.post("/logout",logout);
authRouter.post("/refresh",refresh);
authRouter.get("/me",verifyAuth,fetchMe);
module.exports={authRouter};