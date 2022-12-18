const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get("/",function(req,res){
  res.render("home");
});











app.listen(3000,function(req,res){
  console.log("listening on port 3000");
})
