//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const truncate = require("truncate");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');
//ensures we can get information from the webpage
app.use(bodyParser.urlencoded({ extended: true }));
//serves up the static files in the public directory
app.use(express.static("public"));
//Global scope array
let posts = [];

app.get("/", function (req, res) {
  //renders the home page and the content like the about and contact page, but will also host the posts which will get from being redirected from the app.post("/compose") route
  res.render("home", {
    homePageText: homeStartingContent,
    posts: posts
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutPageText: aboutContent });
});

app.get("/contact", function (req, res) {
  //renders the contact page, and passes the contactContent variable to the contactPageText variable in the contact page which is displayed as the string above
  res.render("contact", { contactPageText: contactContent });
})

app.get("/compose", function (req, res) {
  //renders the compose page
  res.render("compose");
})

app.post("/compose", function (req, res) {
  //saves this information to an object
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody
  };
  //puts the information to the posts array, each an an object
  posts.push(post);
  //redirects to the home route to eventually show you the post
  res.redirect("/");
})

app.get("/posts/:post", function(req,res){
  //saves the value of req.params.post to th requestedTitle variable
  const requestedTitle = req.params.post;

  posts.forEach(function(post){
    const storedTitle = post.title;
    //this checks if the title is each to the route parameter title, lodash checks the need to check for spacing and upper and lower case situations
    if(_.lowerCase(storedTitle) === _.lowerCase(requestedTitle)){
      //Like any if the condition is true it going to pass information to the post page and pass in post.title to title and post.body to the content variable in tbe post page
      res.render("post",{title:post.title, content:post.body});
    }
  })
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
