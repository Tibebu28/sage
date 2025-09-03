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

const merchantSchema = new mongoose.Schema({
    dealer: {type: String, required: true},
    dealerNumber: {type: Number, unique: true},
    password: String,
    role: {type: String, enum:["merchant", "admain"], default: "merchant"}
})

const Merchant = mongoose.model("merchant",merchantSchema)

app.post("/register",async(req,res)=>{
    const {dealer, dealerNumber, password} = req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const merchant = new Merchant({dealer, dealerNumber, password:hashedPassword})
    await merchant.save()

    res.status(200).json(merchant)
})

app.post("/login",async(req,res)=>{
    const {dealerNumber,password} = req.body
    const merchant = await Merchant.findOne({dealerNumber})
    if(!merchant) return res.status(404).json({message:"user not found"})

    const isMatch = await bcrypt.compare(password, merchant.password)
    if(!isMatch) return res.json({message:"invalid password"})
    

    const token = jwt.sign({id:merchant._id,dealerNumber: merchant.dealerNumber, role:merchant.role},key)
    
    return res.json({dealerNumber: merchant.dealerNumber,token:token})
})

function open(req,res,next) {
    const header  = req.headers["authorization"]
    const token = header && header.split(" ")[1]
    if(!token) return res.sendStatus(401)

        jwt.verify(token,key,(err,decoded)=>{
            if(err) return res.sendStatus(403)
                console.log("decoded"+decoded)
                req.merchant = decoded
            next()
        })
}

function role(requiredrole){
    return (req,res,next)=>{
        if(req.merchant.role !== requiredrole){
                return res.status(401).json({message:"you don't have permisson"})
        }
        next()    

    }
}


app.get("/profile", open, async(req,res)=>{
    const merchant = await Merchant.findOne({dealerNumber: req.merchant.dealerNumber})
    if(!merchant){
        return res.status(404).json({message:"merchat not found"})
    }
    res.status(200).json({
        message:"hi",
        dealerNumber: merchant.dealerNumber,
        dealer: merchant.dealer
    })
    
})
app.get("/admain",open,role("admain"),(req,res)=>{
    res.json({message:"welcome admin"})
    
})

app.listen(3002,()=>{
    console.log("server started")
})