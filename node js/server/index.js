const express = require("express")
const app = express()
const cros = require("cros")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

app.use(express.json())
app.use(cros())
mongoose.conncet("")

const bookSchema = new mongoose.schema({

})
 
 const book = mongoose.model("book",bookSchema)

 app.post("/register",(req,res)=>{
    const {useName,password} = req.body
    const hasedPassword = await bcrypt.hash(password,10)
    const isMatch = await bcrypt.compare(password, book.password)
 })

