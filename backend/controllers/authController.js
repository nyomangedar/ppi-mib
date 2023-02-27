const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
	console.log(req.body);
	const { username, password, divisi } = req.body;

	if (!username || !password) {
		return res.status(401).json({ message: "All fields are required!" });
	}

	const foundUser = await User.findOne({ username });

	if (!foundUser || !foundUser.active) {
		console.log("ga nemu orang nya");
		return res.status(401).json({ message: "Unauthorized" });
	}

	console.log(foundUser);

	const match = await bcrypt.compare(password, foundUser.password);

	if (!match) return res.status(401).json({ message: "Unathorized" });

	const accessToken = generateToken(
		foundUser._id,
		username,
		divisi,
		foundUser.active
	);

	const refreshToken = generateRefreshToken(username);

	res.cookie("jwt", refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: "None",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	res.json({ accessToken });
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = asyncHandler(async (req, res) => {
	const cookies = req.cookies;

	if (!cookies.jwt) return res.status(401).json({ message: "Unauthorized" });

	const refreshToken = cookies.jwt;

	jwt.verify(
		refreshToken,
		process.env.REFRESH_TOKEN_KEY,
		async (err, decoded) => {
			if (err) return res.status(403).json({ message: "Forbidden" });

			const foundUser = await User.findOne({
				username: decoded.username,
			}).exec();

			if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

			const accessToken = generateToken(
				foundUser._id,
				foundUser.username,
				foundUser.divisi,
				foundUser.active
			);

			res.json({ accessToken });
		}
	);
});

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = asyncHandler(async (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.jwt) {
		return res.sendStatus(204);
	}
	res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
	res.json({ message: "Cookie cleared" });
});

// Generate JWT Token
const generateToken = (id, username, divisi, active) => {
	return jwt.sign(
		{ _id: id, username, divisi, active },
		process.env.ACCESS_TOKEN_KEY,
		{
			expiresIn: "10m",
		}
	);
};

// Generate Refresh Token
const generateRefreshToken = (username) => {
	return jwt.sign({ username }, process.env.REFRESH_TOKEN_KEY, {
		expiresIn: "30m",
	});
};

module.exports = {
	login,
	refresh,
	logout,
};
