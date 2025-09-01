
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