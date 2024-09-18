require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonData = require("./products.json");

const start = async()=>{
    try{
       await connectDB(process.env.MONGODB_URL);
       await Product.deleteMany();
       await Product.create(jsonData);
       console.log("Success");
    }catch(e){
        console.log(e);
        
    }
}


start();