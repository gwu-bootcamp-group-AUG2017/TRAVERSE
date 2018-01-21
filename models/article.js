const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
 rating: { type: Number, required: true },
 website: { type: String, required: true },
 url: { type: String, required: true },
 review: { type: String, required: true },
}, { _id: false });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

