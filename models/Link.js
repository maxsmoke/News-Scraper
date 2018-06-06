const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let LinkSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

let Link = mongoose.model("Link", LinkSchema);

module.exports = Link;