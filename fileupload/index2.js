// const multer = require('multer');
// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const app = express();

// app.set("views", path.join(__dirname,"views"));
// app.set("view engine", "ejs");
// var storage = multer.diskStorage({
//     destination: function(req,res,cb) {
//         console.log("at destination... now uploading");
//         cb(null, "api"); 
//     },
//     filename: function(req,file,cb){
//         console.log(file.originalname);
//         cb(null, file.originalname);
//     }
// })

// const maxSize = 7*1000*1000;
// var upload = multer({
//     storage: storage
// }).single("mypic");

// app.get('/',function(req,res){
//     res.render("Signup");
// })
// app.post("/uploadProfilePicture", function(req,res,next){
//     upload(req,res,function(err){
//         console.log("uploading file");
//         if(err){
//             console.log("error occured");
//             res.send(err)
//         }
//         else{
//             res.send("SUCESS!!!");
//         }
//         next();
//     });
// });
// app.listen(8080,()=>{
//     console.log("listening to 8080....");
// })




const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
var fs = require('fs');

	
// View Engine Setup
app.set("view engine","ejs")
app.set("views", path.join(__dirname, '/views'))


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname)
    }
})	

var upload = multer({ storage: storage }).single("mypic")

app.get("/",function(req,res){
	res.render("Signup");
})
	
app.post("/uploadProfilePicture",function (req, res, next) {
	upload(req,res,function(err) {
		if(err) {
			res.send(err)
		}
		else {
			var name = req.file.filename;
			fs.readFile(`uploads/${name}`, 'utf8', function(err, data){
				res.send(`Data in the file : ${data}`);
			});
		}
	})
})

	
app.listen(5000,function(error) {
	if(error) throw error
		console.log('Server created Successfully on PORT - 5000')
})