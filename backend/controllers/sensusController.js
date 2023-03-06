const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler");
const CryptoJS = require("crypto-js");

// @desc Register new sensus
// @route POST /sensus
// @access Public
const createNewSensus = asyncHandler(async (req, res) => {
	const sensus = req.body;

	// Hash password
	// const salt = await bcrypt.genSalt(10);
	// sensus.password = await bcrypt.hash(sensus.password, salt);

	const newSensus = await Sensus.create(sensus);

	if (newSensus) {
		res.status(201).json({ message: `New Sensus ${sensus.email} created` });
	} else {
		res.status(400).json({ mesage: "Invalid user data" });
	}
	// res.json(Sensus.schema.requiredPaths());
});

// @desc Get Sensus Data
// @route POST /sensus/experiment
// @access Public
const getSensusData = asyncHandler(async (req, res) => {
	const email = req.body.email;

	console.log(email);

	const result = await Sensus.find({});

	const filtered = result.filter((item) => item.email === email)[0];
	console.log(filtered);

	let filteredFamily = filtered.families;
	console.log(filteredFamily);

	// const result = await Sensus.findById("6405284912316f956beea23d").exec();

	if (filteredFamily) {
		res.status(201).json(filteredFamily);
	} else {
		res.status(400).json({ mesage: "Invalid user data" });
	}
	// res.json(Sensus.schema.requiredPaths());
});

module.exports = {
	createNewSensus,
	getSensusData,
};
