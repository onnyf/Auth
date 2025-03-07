const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./router/auth/auth");
const cors = require("cors")
const app = express();

require("dotenv").config()

const PORT = 5200;
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api",authRoute)

app.listen(process.env,PORT, ()=>{
    console.log(`Service running on port ${process.env.PORT}`);
});