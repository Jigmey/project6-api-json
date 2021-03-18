require("./database");
fs = require('fs').promises;

const fetch = require('node-fetch');

fetch('https://xivapi.com/lore?string=legendary&columns=Text,Data')
  .then(response => response.json())
  .then(data => fs.writeFile("./data.json", JSON.stringify(data)));

  
//   fs.writeFile("./data.json", JSON.stringify('Hello World!'));
let mongoose = require("mongoose");
let bookmarkModel = require("./ff14/model");
let websiteData = require("./data.json");
bookmarkModel.deleteMany({}).then(
  bookmarkModel.create(websiteData).then((bookmarks) => {
    console.log(bookmarks.length, "website bookmarks created");
    mongoose.disconnect();
  })
);

