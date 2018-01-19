const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
 rating: { type: Number, required: true },
 website: { type: String, required: true },
 url: { type: String, required: true },
 review: { type: String, required: true },
}, { _id: false });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;