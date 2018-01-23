const router = require("express").Router();
const articleRoutes = require("./articles");
//const hotelRoutes = require("./hotel");
//const restRoutes = require("./restaurant");
const placesRoutes = require("./places");
const weatherRoutes = require("./weather");
// NYT routes
router.use("/articles", articleRoutes);

//router.use("/hotel", hotelRoutes);

//router.use("/restaurant", restRoutes);

router.use("/places", placesRoutes);

router.use("/weather", weatherRoutes);


module.exports = router;
