const express = require("express");
const { authenticateUser } = require("./week4Day3/middlewares/auth");

const app = express()

app.use(express.json());
app.use(logRequest);

app.get("/",(req,res)=>{
    res.status(500).json({message:"Welcome To home"})
})
app.get("/about",(req,res)=>{
    res.status(500).json({message:"In this section you will get to know about us"})
})

app.get("/dashboard",authenticateUser,(req,res)=>{
    res.status(500).json({message:"Welcome to your dashboard"})
})

app.post("/register",(req,res)=>{
    const data = req.body
    console.log(data)
    res.status(500).json(data)
})
app.put("/update",(req,res)=>{
    const data = req.body
    console.log(data)
    res.status(500).json(data)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})