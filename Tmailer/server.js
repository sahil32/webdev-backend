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
const data = require('./fakedata/fakedata');
const methodOverride =require('method-override');
class HandlerGenerator{
    login(req,res){
        let email = req.body.mail;
        console.log(email);
        let password = req.body.pass;
        if(email&&password){
            const user = data.data.find((item)=>{return item.email===email&&item.password===password})
            if(user) {
                let token = jwt.sign({email:email},config.secret);
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
class Crud{
    update(req,res){
        let item = req.decoded;
        let newpassword = req.body.newpassword;
        const user = data.data.find((element)=>element.email===item.email);
        user.password=newpassword;
        console.log(user);
        res.redirect('/dash');
    }
    delete(req,res){
        let item = req.decoded;
        for (let user in data.data){
            if (user.email===item.email)
            {
                delete data.data[user];
            }
        }
        res.redirect('/dash')
    }
    create(req,res){
        let email = req.body.email;
        let password = req.body.password;
        data.data.push({email: email, password: password});
        res.redirect('/dash')
        }
    read(req,res){
        res.send(data.data);    
    }
}
app.use(methodOverride('__method'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname+'/stat'));
app.set('views',path.join(__dirname,"/views"))
app.get('/',(req,res)=>{
    res.render('loginForm');
});
let handler = new HandlerGenerator();
let make = new Crud();









app.post('/home',handler.login);
// app.post('/home',(req,res)=>{
//     res.render('dashboard',{req});
// })
app.get('/update',(req,res)=>{
    res.render('update');
})

app.get('/dash',(req,res)=>{res.render('dashboard')
});




app.patch('/api/update',middlware.checkToken ,make.update);

app.get('/read',make.read);
app.listen(3000,()=>{
    console.log("server listening at 3000.... http://localhost:3000");
})