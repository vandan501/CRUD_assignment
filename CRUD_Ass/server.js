// const app=require('./app');

// const PORT=3002||process.env.PORT;

// app.listen(PORT,()=>{
//     console.log(`Server is running on port : http://localhost:${PORT}...`)
// })



const express = require("express");
const cors = require("cors");
const connectToDatabase=require('./config/db')
const { userRoute } = require("./routes/userRoutes");
require("dotenv").config()
const PORT=3002||process.env.PORT;
const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

connectToDatabase()


app.use("/",userRoute)  // user route
app.listen(PORT,async()=>{

    console.log("Server Started on PORT NO:",PORT)
})