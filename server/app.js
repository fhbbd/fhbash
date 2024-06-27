require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const PORT=process.env.PORT||5001
const MONGODB_URI=process.env.MONGODB_URI
const teacherRoute = require('./route/teacherRoute')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/api/teacher', teacherRoute)
app.use((req,res,next)=>{
res.status(404).json({massage:"not Found"})
})
app.use((err,req,res,next)=>{
res.status(500).json({err:err.massage})
})



mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
const db=mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT,()=>{
    console.log(`server is start at the port of ${PORT}`)
})


