require("dotenv").config();
const express = require('express');
const app= express();
const PORT =3000;
app.get('/',(req,res)=>{
    res.send("Hello Mukesh!!");
});
app.get('/twit', (req,res)=>{
    res.send("Hello mister veun");
});
app.get('/login', (req,res)=>{
    res.send("<h2>Hi I was Dehil I Message But you have't reply me </h2>");
});
app.get('/signup', (req, res)=>{
    res.send("<h2>Hi We Meet In Office</h2>");
})

app.listen(process.env.PORT, ()=>{
    console.log(`App Server si Listen on Port ${PORT}`);
});