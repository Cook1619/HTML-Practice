//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//mongoose connecting to mongoDB and creating todolistDB
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});
//New Schema added
const itemsSchema = {
  item: String
};
//Mongoose model based on the itemsSchema
const Item = mongoose.model("Item", itemsSchema );
//Static data added to ToDoList
const item1 = new Item({
  item: "Welcome to your todoList!"
});
const item2 = new Item({
  item: "Hit the + button to add a new item."
});
const item3 = new Item({
  item: "<---Hit this to delete an item."
});

const defaultItems = [item1,item2,item3]
//Refers to the Item model, and insertMany is a built in mongoose model method, and the 2 args are the items we wanna put in the db and an error is there is one
Item.insertMany(defaultItems, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Success!")
  }
})
// Item.remove({},function(err){console.log('removed')})
app.get("/", function(req, res) {

  res.render("list", {listTitle: "Today", newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
