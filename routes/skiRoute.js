const express = require("express");
router = express.Router();
skiRoute = require("../controllers/skiController");

router.get("/", skiRoute.skiController);

module.exports = router;