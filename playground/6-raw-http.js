const https = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=ce9dc84f38a7859e0201ddf0eac287d4&query=40,-75&units=f";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
