const express = require("express");
router = express.Router();
weatherRouteChico = require("../controllers/weatherControllerChico");

router.get("/", weatherRouteChico.weatherControllerChico);
console.log("In Chico weather route");

module.exports = router;