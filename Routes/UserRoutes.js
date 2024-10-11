const express=require('express')
const userRoutes=express.Router();
const {handleUserSignup,handleUserLogin}=require('../Controllers/UserController')

userRoutes.post('/signup',handleUserSignup);
userRoutes.post('/login',handleUserLogin);

module.exports=userRoutes;