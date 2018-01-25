const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  placesSchema = new Schema({
 
 name: { type: String, required: true },
 rating: { type: Number, required: true },
 website: { type: String, required: true },
 url: { type: String, required: true },
 city: { type: String, required: true },
 type: { type: String, required: true },
 review: { type: String, required: true },
 date: { type: Date, default: Date.now }
});

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;