const express=require('express');
const mongoDB = require('mongoose');
const app=express();
const port=8000

const DBConnect=mongoDB.connect('mongodb://127.0.0.1:27017/UserLog').then(()=>{
    console.log('Mongo DB connected');
})

// set ejs for views
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.resolve('./Views'))

// import routers
const staticRoutes = require('./Routes/staticroutes');
const userRoutes = require('./Routes/UserRoutes');

const cookieParser = require('cookie-parser');
const { checkCookies, handleRestrictToLogin } = require('./Middleware/CheckAuth');
const homeRoute = require('./Routes/homeRoute');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())

app.use('/user',userRoutes)
app.use('/home',handleRestrictToLogin,homeRoute)
app.use('/',checkCookies,staticRoutes)

app.listen(port,()=>{
    console.log('server started at ',port);
    
})