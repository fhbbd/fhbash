const Teacher = require('../model/teacherModel')

const getTeacher= async(req,res)=>{
    const allTeacher=await Teacher.find()
    res.send(allTeacher)
}

const createTacher= async(req,res)=>{
    const {name,age}=req.body

    const newTeacher= new Teacher({
        name,
        age
    })
const finalTeacher = await newTeacher.save()
    res.send(finalTeacher)
}



module.exports={getTeacher,createTacher}