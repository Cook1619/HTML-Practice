//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
// const ejs = require("ejs");
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
//Allows use to extract data from our html form
app.use(bodyParser.urlencoded({ extended: true }));
//Allows static files in the public folder to be served up
app.use(express.static("public"));
//Sets up EJS to be used
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  //This is a function in our date.js which we are requiring at the top of the file, and assigning to the variable day
  const day = date.getDate();
  //we render out list.ejs which first renders the day, then renders the newListItems
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  //This is the todo we typed into the input, and were saving it to a variable to render in the above app.get
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    //Then push the value of the captured value item to the items array, then re-direct to the initial get route
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function (req, res) {
  res.render("about");
})

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
