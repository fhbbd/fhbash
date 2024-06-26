
require('dotenv').config()
const express = require('express')
const app = express()
const teacherRouter = require('./route/teacherRoute')
const { default: mongoose } = require('mongoose')

app.use(express.urlencoded({extended:true}))
app.use(express.json())



mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use('/api/teacher',  teacherRouter)


app.listen(PORT,()=>{
    console.log(`server is running at the port of ${PORT}`)
})

module.exports=app;