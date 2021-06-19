const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.use(cors());
app.use(cookieParser());
app.use(bodyParser());

// app.use("/api", authRoutes);
// app.get("/", (req, res) => {
//   return res.send("jkds");
// });

app.use("/api", authRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The app is listening is ${port}`);
});
