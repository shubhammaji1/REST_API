const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true

    },
    price:{
        type: Number,
        require: [true,"Must Provided"]

    },
    featured:{
        type:Boolean,
        default:false

    },
    rating:{
        type: Number,
        default: 4.9

    },
    createdAt:{
        type: Date,
        default : Date.now()

    },
    company:{
        type: String,
        enum:{
            values : ["Apple","Samsung","Dell","HP"],
            message : `{VALUE} IS NOT SUPPORTED`
        }

    }
});

module.exports = mongoose.model("Product",productSchema);