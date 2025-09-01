const express = require('express');
const app = express();
const mongoose = require("mongoose");
app.use(express.json())
mongoose.connect('mongodb+srv://Tibebu28:Addis123!@@cluster0.vsclnww.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err))


const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    page: {type: Number, min:1}

})

const BookModel = mongoose.model("Book",bookSchema)

app.post("/books/insert", async (req,res)=>{
    const book = new BookModel(req.body)
    await book.save()
    res.status(200).json(book)

})
app.get("/book", async(req,res)=>{
    const books = await BookModel.find()
    res.status(200).json(books)
    
})
app.get("/books/:id",(req,res)=>{
    
})
app.put("/books/edit/:id",(req,res)=>{
    
})
app.delete("/books/remove/:id",(req,res)=>{
    
})
app.listen(3003,()=>{
    console.log("srver started at port 3003")
}
)