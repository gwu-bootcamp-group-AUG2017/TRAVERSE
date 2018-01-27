const router = require("express").Router();
const savedRoutes = require("./savedplaces");
const placesRoutes = require("./places");
const weatherRoutes = require("./weather");

// TRAVERSE routes
router.use("/savedplaces", savedRoutes);
router.use("/places", placesRoutes);
router.use("/weather", weatherRoutes);

module.exports = router;
