const express=require('express');
const homeRoute=express.Router();

homeRoute.get('/',async (req,res) =>{
    return res.render('home');  
})

module.exports=homeRoute;