<<<<<<< HEAD

import  express from 'express'
const app = express()

// import fs from "fs"

// fs.readFile("output.text", "utf-8", (err, data)=>{
//     if(err) throw err
//     console.log(data)
// })
 
// fs.writeFile("writeFile.csv", "name,age,gender",(err)=>{
//     if(err) throw err
//     console.log("completed")
// })


// app.get("/", (req,res)=> {
//     res.send("hello world form express")
// })

// app.get("/about", (req,res)=> {
//     res.send("hello from about page")
// })

// app.listen(2017,()=>{
//     console.log("server is started at http://localhost:2017")
// })


app.use(express.json())

app.get("/users", (req,res) => {
    res.send("users list here")
})

// Params
app.get("/users/:id",(req,res)=>{
    const user = req.params.id
    res.send("user id from params is:"+user)
})
// Query
app.get("/search",(req,res)=>{
    res.send("user name:"+ req.query.userName +"<br/>" + "password:"+req.query.password)
})
// Body
app.post("/users",(req,res)=> {
    res.send("user name:"+ req.body?.userName + "<br/>" + "password:"+ req.body?.password)
})

app.listen(2017,()=>{
    console.log("server is started at http://localhost:2017")
})
=======
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(json())

const laptops = [
  {
    id: '1',
    brand: 'HP',
    storage: '16GB',
    memory: '512 GB SSD',
  },
  { id: '2', 
    brand: 'DELL', 
    storage: '8GB', 
    memory: '1TB HDD', 
  },
  {
    id: '3',
    brand: 'HP',
    storage: '16GB',
    memory: '512 GB SSD',
  },
  {
    id: '4',
    brand: 'APPLE',
    storage: '32GB',
    memory: '512 GB SSD',
  {
    id: '5',
    brand: 'LENVO',
    storage: '16GB',
    memory: '512 GB SSD',
  },
  {
    id: '6',
    brand: 'HP',
    storage: '32GB',
    memory: '512 GB SSD',
  {
    id: '7',
    brand: 'DELL',
    storage: '16GB',
    memory: '1TB HDD',
  {
    id: '8',
    brand: 'LENVO',
    storage: '8GB',
    memory: '512 GB SSD',
  },
];

app.get('/laptop', (req, res) => {
  res.status(200).json(laptops);
});
app.get('/laptop/:id', (req, res) => {
  const laptop = laptops.find((laptop)=> laptop.id == req.param.id)

  if(laptop){
    res.status(200).json(laptop)
  } else{
    res.status(404).json({error:"laptop id is not found "})
  }
});

app.post("/upload",(req,res)=>{
  const body = req.body
  const laptop = {

    id: laptops.length +1, 
    brand: body.brand,
    storage: body.storage, 
    memory: body.memory, 
    img: body.img};

  res.push(laptops)
  res.status(200).json(laptop)
})

app.put("/update/:id",(req,res)=>{
  const laptop = laptops.find((laptop)=> req.params.id == laptop.id)

  laptop.id == req.params.id 

  if (laptop) {
    const {brand, storage, memory, img} = req,body;
    if(brand) laptop.brand = brand;
    if(storage) laptop.storage = storage;
    if(memory) laptop.memory = memory;
    if(img) laptop.img = img;

    res.status(200).json(laptop)
  } else {
    res.status(404).json({error:"laptop id is not found"})
  }
})

app.delete("/delete/:id",(req,res)=>{
  const laptop = laptops.findIndex((laptop)=> req.params.id === laptop.id);
   res.status(200).json({message:"deleted sucssfully"})
})



app.listen(5000, () => {
  console.log('server started in port http://localhost:5000');
});
>>>>>>> a46fe948da972edbb6816750924be69099c451c6
