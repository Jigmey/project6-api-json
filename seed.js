require("./database");
fs = require('fs').promises;

const fetch = require('node-fetch');

fetch('https://xivapi.com/character/730968')
  .then(response => response.json())
  .then(data => fs.writeFile("./data.json", JSON.stringify(data)));

  
//   fs.writeFile("./data.json", JSON.stringify('Hello World!'));
let mongoose = require("mongoose");
let ff14Model = require("./ff14/model");
let websiteData = require("./data.json");
ff14Model.deleteMany({}).then(
  ff14Model.create(websiteData).then((ff14) => {
    console.log(ff14.length, "website ff14 created");
    mongoose.disconnect();
  })
);

