const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./router/auth/auth");
const app = express();



const PORT = 5200;
connectDB();
app.use(express.json());
app.use("/api",authRoute)

app.listen(PORT, ()=>{
    console.log(`Service running on port ${PORT}`);
});