//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {

  let today = new Date();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month:'long'
  }
  let day = today.toLocaleDateString("en-US", options);
  //we render out list.ejs which first renders the day, then renders the newListItems
  res.render("list", { kindOfDay: day, newListItems: items});
});

app.post("/", function(req,res){
  //This is the todo we typed into the input, and were saving it to a variable to render in the above app.get
  let item = req.body.newItem;
  //Then push the value of the captured value item to the items array, then re-direct to the initial get route
  items.push(item);
  res.redirect("/");
})

console.log("test")
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
