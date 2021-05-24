const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/stat'));
app.use(express.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    const { c } = req.body;
    if (c == 1) {
        res.json({
            success: true,
            sub1: "physics",
            sub2: "chemistry",
            sub3: "mathematics"
        })
    } else if (c == 2) {
        res.json({
            success: true,
            sub1: "English",
            sub2: "Hindi",
        })
    }
    else if (c == 3) {
        res.json({
            success: true,
            sub1: "ComputerScience",
            sub2: "PE"
        })
    }
    else {
        console.log(req);
        res.json({
            success: false,
            message: "sorry Error!!"
        })
    }
})
app.get('/', (req, res) => {
    res.render('index');
})
app.listen(3000, () => {
    console.log("listening to http://localhost:3000");
})