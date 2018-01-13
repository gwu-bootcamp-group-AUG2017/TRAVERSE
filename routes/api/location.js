 const router = require("express").Router();
const locationController = require("../../controllers/locationController");

// Matches with "/api/articles"
router.route("/")
  .get(locationController.findAll)
  .post(locationController.create);



module.exports = router;