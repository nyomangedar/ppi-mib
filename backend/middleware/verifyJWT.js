const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const verifyJWT = asyncHandler(async (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader?.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	const token = authHeader.split(" ")[1];

	jwt.verify(token, process.env.ACCESS_TOKEN_KEY, async (err, decoded) => {
		if (err) return res.status(403).json({ message: "Forbidden" });
		let userFromDB;
		userFromDB = await User.findById(decoded._id).exec();
		next();
	});
});

module.exports = verifyJWT;
