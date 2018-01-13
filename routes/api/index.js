const router = require("express").Router();
const articleRoutes = require("./articles");
const locationRoutes = require("./places");
const nytRoutes = require("./nyt");

// NYT routes
router.use("/articles", articleRoutes);

router.use("/places", locationRoutes);

router.use("/nyt", nytRoutes);

module.exports = router;
