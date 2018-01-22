const router = require("express").Router();
const placesController = require("../../controllers/placesController");

// Matches with "/api/nyt"
router
  .route("/")
  .get(placesController.findAll)
 
module.exports = router;