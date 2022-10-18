const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//SEtup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Vivek Yadav",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Vivek  Yadav",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "this is help page!",
    title: "Help Page",
    name: "Vivek Yadav",
  });
});
// app.get("/about", (req, res) => {
//   res.send([
//     {
//       name: "Sara",
//     },
//     {
//       name: "vivek",
//     },
//   ]);
// });
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});
// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
