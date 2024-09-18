const express = require("express");
const app = express();
const Student = require("./models/students")
const StudentRouter = require("./routers/student");
require("./db/conn");
const port = process.env.PORT || 4000;

app.use(express.json()); 
app.use(StudentRouter);

app.get("/",(req,res)=>{
    res.send("Hii, This is for all");
})


app.listen(port,()=>{
    console.log(`connected@${port}`);
})