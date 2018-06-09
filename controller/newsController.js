const CHEERIO = require("cheerio");
const EXPRESS = require("express");

let ROUTER = EXPRESS.Router();

const DB = require("../models");

ROUTER.get("/", (request, response) => {
  response.render("index");
});

module.exports = ROUTER;



  //   response.render("index");
    // db.Link.find({}).then(dbLink => {
  //   response.json(dbLink);
  //   console.log(dbLink);

  // });