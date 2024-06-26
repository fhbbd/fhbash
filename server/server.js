require('dotenv').config()
const { default: mongoose } = require('mongoose')
const app =require('./app')
const MONGODB_URI=process.env.MONGODB_URI;
const PORT=process.env.PORT || 5001


await mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT,()=>{
    console.log(`server is running at the port of ${PORT}`)
})