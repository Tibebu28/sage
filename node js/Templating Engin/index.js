const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home',{name:'Tibebu',isLogdin: false})
})
app.listen(3006,()=>{
    console.log('server is started at port http://localhost:3006')
})