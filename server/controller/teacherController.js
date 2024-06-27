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
        const {
            tId,
            name,
            designation,
            salary,
            late,
            absent,
            diduction,
            addition,
            month
        }=req.body
        const newTeacher= new Teacher({
            tId,
            name,
            designation,
            salary,
            late,
            absent,
            diduction,
            addition,
            month
    })
        const finalTeacher = await newTeacher.save()
        res.json(finalTeacher)
    
} catch (error) {
    res.json(error)
}}



module.exports={getTeacher,createTacher}