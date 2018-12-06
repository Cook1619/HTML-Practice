const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
// const axios = require('axios')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    console.log(req.body);
    let crypto =  req.body.crypto;
    console.log(`The cryto is ${crypto}`);
    let fiat = req.body.fiat;
    console.log(`The fiat is ${fiat}`);

    let baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    let finalURL = baseURL + crypto + fiat;

    request(finalURL, function(error, response, body){
        //Add error message 
        let data = JSON.parse(body);
        // console.log(data);
        let price = data.last;
        // console.log(price);
        let currentDate = data.display_timestamp;

        res.write(`<p>The current date is ${currentDate}</p>`);

        res.write(`<h1>The current price of ${crypto} is ${price} ${fiat}.</h1>`);

        res.send();
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