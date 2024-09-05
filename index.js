const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT||4000;
app.listen(PORT,()=> {
    console.log(`Server is running at ${PORT}`);
    connectDB();
});

 //iBOTPNR7RFWgYnHi

