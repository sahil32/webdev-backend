const express = require("express");
// const colors = require("colors");
const methodOverride = require("method-override");
const app = express();
const ejs = require('ejs');
// app.use((req,res)=>{
//     console.log("request accepted");
//     res.send("<h1>this is my webpage</h1>");

// })
app.use(express.json())
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.send("this is homepage");
})

let data = [{
    username:'harry',
    age:'50'
}];
const arr = ["cats", "dogs", "hero", "anime"]
for (let ele of arr)
{
    app.get(`/${ele}`,(req,res)=>{
        res.send(`this is ${ele}`);
    });
}
app.get('/up',(req,res)=>{
    res.render('update')
})
app.patch('/update',(req,res)=>{
    // data[0].username = req.body.username;
    // data[0].age = req.body.age;
    res.json(req.body.json()); 
})
app.listen(3000,()=>{
    console.log("listening to port 3000!!!!");
});