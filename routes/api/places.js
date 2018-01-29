const router = require("express").Router();
const placesController = require("../../controllers/placesController");

// Matches with "/api/places"
router
  .route("/")
  .get(placesController.findPlaces)
 
module.exports = router;