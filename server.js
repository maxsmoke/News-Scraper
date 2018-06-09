const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const LOGGER = require("morgan");

//scraping tools
const AXIOS = require("axios");
const CHEERIO = require("cheerio");

//database
let DB = require("./models/index");

const PORT = 3000;

//initialize express
const APP = EXPRESS();

//middleware
APP.use(LOGGER("dev"));
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(EXPRESS.static("public"));

MONGOOSE.connect("mongodb://localhost/webScrape");

APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

const EXPHBS = require("express-handlebars");

APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

const ROUTES = require("./controller/newsController.js");

APP.use(ROUTES);

// Start the server
APP.listen(PORT, _ => {
  console.log(`App running on port ${PORT}!`);
});
