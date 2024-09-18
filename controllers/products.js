const Product = require("../models/product")

const getAllProducts = async(req,res)=>{
    const {company,name} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name, $options: "i" };
    }
    const myData = await Product.find(queryObject).sort("name");  // Get data from Database(MongoDB)
    res.status(200).json({myData});
};
const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({msg:"Get All products for Testing"});
};


module.exports = {getAllProducts, getAllProductsTesting};
