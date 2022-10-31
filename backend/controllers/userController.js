const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
	// Get all users from Database
	const users = await User.find().select("-password").lean();

	if (!users?.length) {
		return res.status(400).json({ message: "No users found" });
	}

	res.json(users);
});

// @desc Register new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
	const { username, password, divisi } = req.body;
	console.log(req.body);

	if (!username || !password || !divisi) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const duplicate = await User.findOne({ username })
		.collation({ locale: "en", strength: 2 })
		.lean()
		.exec();

	if (duplicate) {
		return res.status(409).json({ message: "Duplicate username" });
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const userObject = { username, password: hashedPassword, divisi };

	const user = await User.create(userObject);

	if (user) {
		res.status(201).json({ message: `New user ${username} created` });
	} else {
		res.status(400).json({ message: "Invalid user data" });
	}
});

module.exports = {
	getAllUsers,
	createNewUser,
};
