const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDatabase();

const authRoute = require("./src/routes/authRoute");
const taskRoute = require("./src/routes/taskRoute");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRoute);
app.use("/task", taskRoute);

app.listen(3000, () => {
  console.log("Listening On: 3000");
});

function connectDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI, { dbName: "KaushalamToDo" })
    .then(() => {
      console.log("Connected to MONGODB");
    })
    .catch((err) => {
      console.log("ERR: " + err);
    });
}
