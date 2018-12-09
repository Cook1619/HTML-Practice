//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");

app.get("/", function (req, res) {
  let today = new Date();
  let day = ""
  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }
  res.render("list", { kindOfDay: day });
});

console.log("test")
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
