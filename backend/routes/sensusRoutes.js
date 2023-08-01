const express = require("express");
const router = express.Router();
const sensusController = require("../controllers/sensusController");

router.route("/").post(sensusController.createNewSensus);
router.route("/check-email").post(sensusController.checkEmailData);
router.route("/getAlumni").get(sensusController.getAlumniFullName);
router.route("/getStudent").post(sensusController.getStudentFullName);
router.route("/getAll").get(sensusController.getAllSensus)
router.route("/getCitizen").get(sensusController.getCitizen)

module.exports = router;
