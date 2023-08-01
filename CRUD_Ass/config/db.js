const mongoose=require('mongoose');

const connectToDatabase= async () =>
{
mongoose.connect(process.env.MONGO_URI)
.then((conn)=>{
    console.log(`connected to database`)
})
.catch((err)=>{
console.log("Error:"+err.message);
process.exit(1)
})
}

module.exports=connectToDatabase;