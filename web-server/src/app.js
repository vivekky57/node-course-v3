const express = require("express");
const path = require("path");
console.log(__dirname);
// console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// app.get("", (req, res) => {
//   res.send("<h1> Weather</h1>");
// });

app.get("/help", (req, res) => {
  res.send({
    name: "vivek",
    age: 25,
  });
});
app.get("/about", (req, res) => {
  res.send([
    {
      name: "Sara",
    },
    {
      name: "vivek",
    },
  ]);
});
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});
//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
