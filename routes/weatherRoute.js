const express = require("express");
router = express.Router();
weatherRoute = require("../controllers/weatherController");

router.get("/", weatherRoute.weatherController);

module.exports = router;