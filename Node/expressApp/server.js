const express = require('express');

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", function (req, res) {
    res.send("Contact me at 123@gmail.com");
})

app.get("/about", function(req,res){
    res.send("<h2>Matt Cook</h2> <h3>Position: Full Stack Dev</h3> <h4>Hobbies: Outdoors</h4>")
})

app.get("/hobbies", function(reeq,res){
    res.send("<h1>Coding</h1> <h1>Outdoors</h1> <h1>Beer</h1> <h1>Family</h1>")
})

app.listen(3000, function () {
    console.log('Server started on port 3000');
});