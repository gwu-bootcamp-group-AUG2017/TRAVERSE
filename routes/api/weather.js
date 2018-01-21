const router = require("express").Router();
const articleController = require("../../controllers/weatherController");

// Matches with "/api/nyt"
router
  .route("/")
  .get(articleController.findAll)
 
module.exports = router;
