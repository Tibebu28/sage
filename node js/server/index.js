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

app.post('/register',(req,res)=>{
   const {userName,password} = req.body
   const hashedPassword = await bcrypt.hash(password,10)
   const user = new User({userName,password:hashedPassword})
   await user.save()
})

app.post('/login',(req,res)=>{
   const {userName,password} = req.body

   const user = await User.find(u => user === u.user)
   if(user) return res.sendStatus(409)


   const isMatch = await bcrypt.compare(password,user.password)

  const token = jwt.sign({userName: }, key)
})

function midlle(req,res,next){
   const header = req.header['authoration']
   const token = header && header.split(" ")[1]
   if (!token) return res.sendSend(401)


   jwt.verify(token,key,(err,u)=>{
      if(err) return res.sendStatus
         req.user = user
      next()
   })
}