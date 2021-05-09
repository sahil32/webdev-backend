//this is upload using old classical formidable module with the mixture of express and ejs
const formidable = require("formidable");
const express = require("express");
const ejs =require('ejs');
const fs = require('fs');
const app = express();

app.get('/',(req,res)=>{
    res.render('fileupload_temp.ejs')
});
app.listen(3000, ()=>{
    console.log("listening at port 3000");
})
app.post('/fileupload',(req,res)=>{
    let form = new formidable.IncomingForm();
    form.parse(req,(err,field,files)=>{
        let oldpath = files.filetoupload.path;
        let newpath = '/home/bigstep/Desktop/backend-webdev MEAN-MERN/fileupload/files'+files.filetoupload.name;
        fs.rename(oldpath,newpath,(err)=>{
            if(arr) throw err;
            res.send('your file is succesfully uploaded!!!');
        });
    });
});