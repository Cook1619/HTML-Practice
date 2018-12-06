const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, res, body){
        //Add error message 
        let data = JSON.parse(body);
        let price = data.last;
        res.send("<h1>The current price of bitcoin is " + price + " !<h1>")
    })
})

// app.post("/", async function(req,res){
//     try {
//         const { data } = await axios("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD")
//         //Add error message 
//         let price = data.averages.week;
//         res.send(`The price of bitcoin is ${price}`)
//     } catch (err) {
//         res.send(404)
//     }
// })

app.listen(3000, function(){
    console.log('Server running on port 3000');
})