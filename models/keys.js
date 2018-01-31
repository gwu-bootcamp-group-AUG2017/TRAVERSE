const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  keysSchema = new Schema({
 keyname: { type: String, required: true },
 value: { type: String, required: true }
});

const Keys = mongoose.model("Keys", keysSchema);

module.exports = Keys;