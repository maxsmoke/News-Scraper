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
      response.render("viewData", { data: dbArticle });
    })
    .catch(err => {
      response.json(err);
    });
});

ROUTER.get("/scrape", (req, res) => {
  AXIOS.get("http://www.echojs.com/").then(response => {
    let $ = CHEERIO.load(response.data);
    let SCRAPE = [];

    $("article h2").each(function(i, element) {
      const RESULT = {};

      RESULT.title = $(this).children("a").text();
      RESULT.link = $(this).children("a").attr("href");

      DB.Article
        .create(RESULT)
        .then(dbArticle => {
          // console.log(dbArticle);
          SCRAPE.push(dbArticle);
        })
        .catch(err => {
          return res.json(err);
        });
    });

    // console.log(SCRAPE);
    const RESPONSE = "Data Scraped!";
    // console.log(RESPONSE)
    res.render("scrapeData", { response: RESPONSE, data: DB.Article });
  });
});


// Route for saving/updating an Article's associated Note
ROUTER.post("/articles/:id", (request, response) => {
  // Create a new note and pass the req.body to the entry
  DB.Note
    .create(request.body)
    .then(dbNote => {
   
      return DB.Article.findOneAndUpdate(
        { _id: request.params.id },
        { note: dbNote._id },
        { new: true, title: dbNote.title, body: dbNote.body }
      );
    })
    .then(dbArticle => {
      response.json(dbArticle);
    })
    .catch(err => {
      // If an error occurred, send it to the client
      response.json(err);
    });
});

module.exports = ROUTER;
