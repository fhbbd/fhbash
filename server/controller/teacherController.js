const Teacher = require('../model/teacherModel')

const getTeacher= async(req,res)=>{
    try {
        const allTeacher= await Teacher.find()
        res.json(allTeacher)
    } catch (error) {
        res.json(error)
    }
   
}

const createTacher= async(req,res)=>{
try {
        const {name,age}=req.body
        const newTeacher= new Teacher({
            name,
            age
    })
        const finalTeacher = await newTeacher.save()
        res.json(finalTeacher)
    
} catch (error) {
    res.json(error)
}}



module.exports={getTeacher,createTacher}