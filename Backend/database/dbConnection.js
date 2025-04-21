import mongoose from "mongoose";

 const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"RESTAURANT"
    })
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log(err));
}

export { dbConnection };