const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method == "GET") {
//     res.send("GET requests are disbled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("site is currently down. check back soon!");
// });

const multer = require("multer");
const upload = multer({
  dest: "images",
});
app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("6366a58a40064c1d3d28c14d");
  // await task.populate("owner");
  // console.log(task.owner);

  const user = await User.findById("6366a4b48292a298a0c1a3cd");
  await user.populate("tasks");
  console.log(user.tasks);
};

main();

// const jwt = require("jsonwebtoken");
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7d",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("Red12345!", hashedPassword);
//   console.log(isMatch);
// };
// myFunction();
