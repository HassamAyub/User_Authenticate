const express=require('express')
const staticRoutes=express.Router();

staticRoutes.get('/login',async (req,res) =>{
  return res.render('login');  
})

staticRoutes.get('/signup',async (req,res) =>{
  return res.render('signup');  
})

module.exports=staticRoutes;