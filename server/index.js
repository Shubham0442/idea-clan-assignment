const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { loginController } = require("./controllers/login.controller");
const { signupController } = require("./controllers/signup.controller");
const { logoutController } = require("./controllers/logout.controller");
const { studentController } = require("./controllers/student.controller");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", loginController);
app.use("/signup", signupController);
app.use("/logout", logoutController);
app.use("/students", studentController);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`app is running on http://localhost:${PORT}`);
  } catch (error) {
    console.log("error:", error);
  }
});
