const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1> Weather</h1>");
});

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
