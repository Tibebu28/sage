const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('we can write <br/> html here')
})

app.get('/json',(req,res)=>{
    res.json({school:"sage", addres:"megenagna"})
})

app.get('/status',(req,res)=>{
    res.status(301).send('we achive express response type in sage ')
})

app.get('/redirect',(req,res)=>{
    res.redirect('https://www.google.com')
})

app.listen(3005,()=>{
    console.log('server started at port http://localhost:3005')
})