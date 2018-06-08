const MONGOOSE = require("mongoose");

let Schema = MONGOOSE.Schema;

let ArticleSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

let Article = MONGOOSE.model("Article", ArticleSchema);

module.exports = Article;