const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const cors=require('cors')

dotenv.config();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;




const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server is running");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
