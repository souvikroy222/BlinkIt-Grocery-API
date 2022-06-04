const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const bodyParser=require('body-parser');

const { errorHandler, notFound } = require("./middleware/errorMiddleware");



const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

dotenv.config();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("blinkIt");
});

app.use(notFound);
app.use(errorHandler);

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
