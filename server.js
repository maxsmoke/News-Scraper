const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express-handlebars");

const axios = require("axios");
const cheerio = require("cheerio");

let db = require("./models");
let PORT = 3000;

let app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/webScrape";
// mongoose.connect("mongodb://localhost/webScrape");
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.get("/scrape", (request, response) => {
  axios.get("http://www.digg.com/").then(resp => {
    let $ = cerio.load(resp.data);

    //scrap code goes here
    res.send("Scrapped the news!");
  });
});

app.get("/links/:id", (request, response) => {
  // get an article db code
});

app.post("/articles:/:id", (request, response) => {});

app.listen(PORT, () => {
  console.log(`APP running on port ${PORT} !`);
});
