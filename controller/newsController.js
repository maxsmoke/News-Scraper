const CHEERIO = require("cheerio");
const EXPRESS = require("express");

let ROUTER = EXPRESS.Router();

const DB = require("../models");

ROUTER.get("/", (request, response) => {
  console.log("in root");

  // db.Link.find({}).then(dbLink => {
  //   response.json(dbLink);
  //   console.log(dbLink);

  // });

});

module.exports = ROUTER;
  //   response.render("index", { data: dbLink });