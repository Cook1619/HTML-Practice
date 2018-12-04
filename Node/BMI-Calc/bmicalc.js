const express =  require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let height = parseFloat(req.body.height);
    let weight =  parseFloat(req.body.weight);
    let result = weight / (height * height);
    res.send(`Your BMI is ${result}`);
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
})