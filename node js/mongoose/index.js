const express = require("express")
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const key = "hellow"

app.use(express.json())

mongoose.connect("mongodb+srv://Tibebu28:Abebe123@cluster0.vsclnww.mongodb.net/electronic?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongoDB conncted")
})

const mobileSchema = new mongoose.Schema({
    merchant: {type: String, required: true},
    merchantNumber: {type: Number, unique: true},
    password: String
})

const Mobile = mongoose.model("mobile",mobileSchema)

app.post("/register",async(req,res)=>{
    const {merchant, merchantNumber, password} = req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const mobile = new Mobile({merchant, merchantNumber, password:hashedPassword})
    await mobile.save()

    res.status(200).json(mobile)
})

app.post("/login",async(req,res)=>{
    const {merchantNumber,password} = req.body
    const mobile = await Mobile.findOne({merchantNumber})
    if(!mobile) return res.status(404).json({message:"user not found"})

    const isMatch = await bcrypt.compare(password, mobile.password)
    if(!isMatch) return res.json({message:"invalid password"})
    

    const token = jwt.sign({merchantNumber: mobile.merchantNumber},key)
    
    return res.json({merchantNumber: mobile.merchantNumber,token:token})
})

function open(req,res,next) {
    const header  = req.header["authorization"]
    const token = header && header.split(" ")[1]
    if(!token) return res.sendStatus(401)

        jwt.verify(token,key,(err,decoded)=>{
            if(err) return res.sendStatus(403)
                req.mobile = decoded
            next()
        })
}

function role(requiredrole){
    return (req,res,next)=>{
        if(req.mobile.role !== requiredrole){
                return res.status(401).json({message:"you don't have permisson"})
        }
        next()    

    }
}


app.get("/merchat/profile",open,async(req,res)=>{
    const merchant = await Mobile.findOne({merchantNumber: req.mobile.merchantNumber})
    if(!merchant){
        return res.status(401).json({message:"merchat not found"})
    }
    res.status(200).json("Hi merchat")
    
})
app.get("/admain",open,role("admain"),(req,res)=>{
    res.json({message:"welcome admin"})
    
})

app.listen(3002,()=>{
    console.log("server started")
})