const { default: mongoose } = require("mongoose");



const teacherSchema = mongoose.Schema({
    tId:String,
    name:String,
    designation:String,
    salary:Number,
    late:Number,
    absent:Number,
    diduction:Number,
    addition:Number,
    month:String
}) 


module.exports = teacherSchema;