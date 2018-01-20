const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");
const restRoutes = require("./restaurant");
const clubRoutes = require("./nightclubs");
const weatherRoutes = require("./weather");
// NYT routes
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

router.use("/restaurant", restRoutes);

router.use("/nightclubs", clubRoutes);

router.use("/weather", weatherRoutes);


module.exports = router;
