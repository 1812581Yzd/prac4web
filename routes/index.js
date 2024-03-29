var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hello",function (req,res,next){
  res.send("Hello World");
});


//3.1
let last = "";
router.get("/last.txt",function(req,res,next){
  if(last ==""){
    last = new Date();
    res.send();
  }else{
    last = new Date();
    res.send(last);
  }
});


//3.2
let colors = ["red","yellow","green","blue"];
let visit = 0;
router.get("/color.html",function(req,res,next){
  let color = colors[visit%4];
  visit++;
  res.send(`<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Prac 4 Express Server</title>
  </head>
  <body>
      <h1 style="color:${color}">${color}</h1>
  </body>
  </html>`);
});


//3.3
let log ="";
router.get("/log.html",function(req,res,next){
  let now = new Date();
  log+=`<li>${now}</li>`;
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Prac 4 Express Server</title>
  </head>
  <body>
      <ul>${log}</ul>
  </body>
  </html>`);
});


//3.4
let visited = false;
router.get("/first.html",function(req,res,next){
if(!visited){
  visited = true;
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Prac 4 Express Server</title>
    </head>
    <body>
      <h1>Welcome</h1>
      <a href="/main.html">main</a>
      <p>Random text</p><!-- random text -->
    </body>
    </html>`);
} else {
  res.redirect("/main.html");
}
});

router.get("/main.html",function(req,res,next){
  if(visited){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Prac 4 Express Server</title>
    </head>
    <body>
        <h1>My main site</h1>
    </body>
    </html>`);
  }else{
    res.redirect("/first.html");
  }
});
module.exports = router;
