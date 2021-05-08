const express = require("express");
// const colors = require("colors");

const app = express();
// app.use((req,res)=>{
//     console.log("request accepted");
//     res.send("<h1>this is my webpage</h1>");

// })
app.get('/',(req,res)=>{
    res.send("this is homepage");
})
const arr = ["cats", "dogs", "hero", "anime"]
for (let ele of arr)
{
    app.get(`/${ele}`,(req,res)=>{
        res.send(`this is ${ele}`);
    });
}
app.listen(3000,()=>{
    console.log("listening to port 3000!!!!");
});