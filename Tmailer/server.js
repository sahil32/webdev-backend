const express = require("express");
const ejs =require('ejs');
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require('path');
const app = express();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const config = require('./config.js')
const middlware = require('./middleware.js');
const { urlencoded } = require("express");

class HandlerGenerator{
    login(req,res){
        let email = req.body.mail;
        console.log(email);
        let password = req.body.pass;
        let data = [{
            email: 'sahil@email.com',
            password: 'admin'
        },{
            email: 'aditya@email.com',
            password: 'admin'
        },{
            email: 'suresh@email.com',
            password: 'admin'
        },{
            email: 'ramesh@email.com',
            password: 'admin'
        }];
        if(email&&password){
            const user = data.find((item)=>{return item.email===email&&item.password===password})
            if(user) {
                let token = jwt.sign({email:email},config.secret,{expiresIn:'1h'});
                res.json({
                    success: true,
                    message: 'authentication successfull!',
                    token: token
                })
            }
            else {
                
                res.send(403).json({
                  success: false,
                  message: 'Incorrect username or password'
                });
              }
            } 
            else {
              res.send(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
              });
        }
    }
}


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname+'/stat'));
app.set('views',path.join(__dirname,"/views"))
app.get('/',(req,res)=>{
    res.render('loginForm');
});
let handler = new HandlerGenerator();

app.post('/home',handler.login);
// app.post('/home',(req,res)=>{
//     res.render('dashboard',{req});
// })
app.get('/update',(req,res)=>{
    res.render('update');
})

app.get('/dash',(req,res)=>{res.render('dashboard')});




app.post('/api/update',middlware.checkToken);
app.listen(3000,()=>{
    console.log("server listening at 3000.... http://localhost:3000");
})