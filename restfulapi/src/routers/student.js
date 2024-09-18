const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//             res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })   
// });


//Add data to DB

router.post("/students",async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser =await user.save();
        res.status(201).send(createUser);

    }catch(e){
        res.status(400).send(e);
    } 
})

//Get data from DB

router.get("/students",async(req,res)=>{
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
        
    }

})
// Find By ID
router.get("/students/:id",async(req,res)=>{
        try {
            const _id = req.params.id;
            const studentData = await Student.findById(_id);
            if (!studentData) {
                return res.status(404).send();
            } else {
                res.send(studentData);
            }
           
        } catch (error) {
            res.status(500).send(error);
        }
})

//Update the Data

router.patch("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudent);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
})

// Delete tha data

router.delete("/students/:id",async(req,res)=>{
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
        
    }
})

module.exports = router;