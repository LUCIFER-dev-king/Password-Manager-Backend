const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const passRoutes = require("./routes/passwordVault");
const notesRoutes = require("./routes/notesVault");
const addressRoutes = require("./routes/addressVault");
const paymentCardRoutes = require("./routes/paymentCardVault");
const bankAccountRoutes = require("./routes/bankAccountVault");

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
app.use("/api", passRoutes);
app.use("/api", notesRoutes);
app.use("/api", addressRoutes);
app.use("/api", paymentCardRoutes);
app.use("/api", bankAccountRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The app is listening is ${port}`);
});
