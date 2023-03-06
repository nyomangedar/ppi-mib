const express = require("express");
const router = express.Router();
const sensusController = require("../controllers/sensusController");

router.route("/").post(sensusController.createNewSensus);
router.route("/find").post(sensusController.getSensusData);

module.exports = router;
