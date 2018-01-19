const router = require("express").Router();
const nightClubController = require("../../controllers/nightClubController");

// Matches with "/api/nyt"
router
  .route("/")
  .get(nightClubController.findAll)
 
module.exports = router;