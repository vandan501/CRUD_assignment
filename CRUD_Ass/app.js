require('dotenv').config();
const express=require('express');
const cors=require('cors');



const connectToDb=require('./config/db.js')

const app=express();


// express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())





// init connection to db
connectToDb();

const userRoute=require('./routes/userRoutes.js')

app.use('/',userRoute)



// export default app; old version
module.exports=app; //new ES6 version   