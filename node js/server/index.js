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
