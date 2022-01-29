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
const bankAccountRoutes = require("./routes/bankAccountVault");

app.use(
  cors({
    origin: [
      "chrome-extension://kghinbmpijahclnknpehcnikkgkfpkle",
      "http://localhost:3000",
    ],

    credentials: true,
  })
);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser());

mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", passRoutes);
app.use("/api", notesRoutes);
app.use("/api", bankAccountRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The app is listening is ${port}`);
});
