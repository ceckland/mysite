const express = require("express");
router = express.Router();
weatherRouteTruckee = require("../controllers/weatherControllerTruckee");

router.get("/", weatherRouteTruckee.weatherControllerTruckee);

module.exports = router;