const mongoose=require("mongoose");
const User=require('../Models/UserModel')
const {setUser}=require('./UserCookiesS');


// user Sign up
async function handleUserSignup(req,res) {
    const body=req.body;
    try {
        const newUser=await User.create({
            username:body.username,
            email:body.email,
            password:body.password
        })
        console.log('user created successfully ',newUser)
        return res.redirect('/login')
    } catch (error) {
        return res.status(500).json({error:error})
    }
}


//user login
async function handleUserLogin(req,res) {
    const {email,password}=req.body;
    
    try {
        const user=await User.findOne({email,password});
        if(!user) return res.render('login',{
            error:'Invalid UserName and Password'
        })
        const token = setUser(user);
        res.cookie('token',token)     
        return res.status(200).redirect('/home');
    } catch (error) {
        return res.status(500).json({error:error})
    }
}
module.exports={
    handleUserSignup,
    handleUserLogin
}