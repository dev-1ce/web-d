import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/about",(req,res)=>{
    res.send("about");
});

app.get("/contact",(req,res)=>{
    res.send("9519259007");
});

app.listen(port,()=>{
    console.log(`Server has started ${port}`);
});