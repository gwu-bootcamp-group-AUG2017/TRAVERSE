const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// Matches with "/api/savedplaces"
router.route("/")

  .get(savedController.findAll)
 
  .post(savedController.create);

// Matches with "/api/savedplaces/:id"
router
  .route("/:id")
  .post(savedController.findById)

  .delete(savedController.remove);

module.exports = router;
