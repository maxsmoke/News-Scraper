const EXPRESS = require("express");
//scraping tools
const AXIOS = require("axios");
const CHEERIO = require("cheerio");

let ROUTER = EXPRESS.Router();

let DB = require("../models");

ROUTER.get("/", (request, response) => {
  response.render("index");
});

ROUTER.get("/articles", (request, response) => {
  DB.Article
    .find({})
    .then(dbArticle => {
      console.log(dbArticle);
      response.render("viewData",{data : dbArticle});
    })
    .catch(err => {
      response.json(err);
    });
});

ROUTER.get("/scrape", (req, res) => {

  AXIOS.get("http://www.echojs.com/").then(response => {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    let $ = CHEERIO.load(response.data);
    // let SCRAPES = [];

    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each((i, element) => {
      // Save an empty result object
      let RESULT = {};

      // Add the text and href of every link, and save them as properties of the result object
      RESULT.title = $(this).children("a").text();
      RESULT.link = $(this).children("a").attr("href");

      // Create a new Article using the `result` object built from scraping
      DB.Article
        .create(RESULT)
        .then(dbArticle => {
          // View the added result in the console
          console.log(dbArticle);
          SCRAPES.push(dbArticle);
        })
        .catch(err => {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });

    // If we were able to successfully scrape and save an Article, send a message to the client
   res.render("scrape complete");
    // res.render("scrapeData",{data: SCRAPES});
  });
});

module.exports = ROUTER;
