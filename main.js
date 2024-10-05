const express = require("express");
const connectDB = require("./config/db");
const dotenv=require("dotenv").config()
connectDB()
const app = express();
app.use("/", (req, res) => {
  res.send("welcome to my home");
});
const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`server running on port ${Port}`);
});
