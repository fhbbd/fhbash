const express = require('express')
const app = express()
const teacherRouter = require('./route/teacherRoute')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/teacher',  teacherRouter)

module.exports=app;