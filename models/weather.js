const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
 
 day: { type: String, required: true },
 max_temp: { type: Number, required: true },
 min_temp: { type: Number, required: true },
 main: { type: String, required: true },
 desc: { type: String, required: true },
 icon: { type: String, required: true }
 
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;