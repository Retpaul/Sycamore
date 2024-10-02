const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.status(500).json({message:"Welcome To home"})
})
app.get("/about",(req,res)=>{
    res.status(500).json({message:"In this section you will get to know about us"})
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})