const express = require("express");
const router = express.Router();
const sensusController = require("../controllers/sensusController");

router.route("/").post(sensusController.createNewSensus);

module.exports = router;
