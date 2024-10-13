const express=require("express");
const app=express();
const port=2000;

app.use(express.static("public"));
app.set("view engine","ejs");


app.get('/',(req,res)=>{
    res.render("./home.ejs");
})
app.get('/Shop',(req,res)=>{
    res.render("./pages/shop.ejs");
})
app.get('/Blog',(req,res)=>{
    res.render("./pages/blog.ejs");
})
app.get('/About',(req,res)=>{
    res.render("./pages/about.ejs");
})
app.get('/Contact',(req,res)=>{
    res.render("./pages/contact.ejs");
})
app.get('/Cart',(req,res)=>{
    res.render("./pages/cart.ejs");
})
















app.listen(port,(req,res)=>{console.log(`it's working fine on ${port}`)});