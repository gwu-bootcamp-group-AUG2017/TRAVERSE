const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
 location: { type: String, required: true },
 date: { type: Date, default: Date.now }
}, { _id: false });

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;