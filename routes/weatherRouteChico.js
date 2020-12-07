const express = require("express");
router = express.Router();
weatherRouteChico = require("../controllers/weatherControllerChico");

router.get("/", weatherRouteChico.weatherControllerChico);

module.exports = router;