const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// Matches with "/api/savedplaces"
router.route("/")

  .get(savedController.findAll)
 
  .post(savedController.create);

// Matches with "/api/savedplaces/:id"
router
  .route("/:id")
  .get(savedController.findById)
  .put(savedController.update)
  .delete(savedController.remove);

module.exports = router;
