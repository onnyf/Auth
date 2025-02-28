const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,);
        console.log("Connection to database established");
    } catch (error) {
      return error.message;
    }
}


module.exports = connectDB;