const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

// @desc Get all users
// @route GET /users
// @access Private
const getAllPost = asyncHandler(async (req, res) => {
	console.log("Masuk get post");
	// Get all posts from Database
	const posts = await Post.find().lean();

	if (!posts?.length) {
		return res.status(400).json({ message: "No posts found" });
	}

	res.json(posts);
});

const createNewPost = asyncHandler(async (req, res) => {
	const { user, title, text, image } = req.body;

	if ((!user, !title, !text, !image)) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const postObject = { user, title, text, image };

	const post = await Post.create(postObject);

	if (post) {
		res.status(201).json({ message: `New post created` });
	} else {
		res.status(400).json({ message: "Invalid post data" });
	}
});

module.exports = {
	getAllPost,
	createNewPost,
};
