require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");



const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/",(req,res)=>{
    res.send("Hii , I am Live");

});


// Middleware

app.use("/api/products",products_routes);
const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} is connected`);
        })
        
    }catch(e){
        console.log(e);
    }
}

start();