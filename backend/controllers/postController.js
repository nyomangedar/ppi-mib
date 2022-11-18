const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

// @desc Get all users
// @route GET /users
// @access Private
const getAllPost = asyncHandler(async (req, res) => {
	console.log("Masuk get post");
	// Get all posts from Database
	const posts = await Post.find().sort({ createdAt: -1 }).lean();

	if (!posts?.length) {
		return res.status(400).json({ message: "No posts found" });
	}

	res.json(posts);
});

const createNewPost = asyncHandler(async (req, res) => {
	const { user, title, text } = req.body;

	console.log(JSON.stringify(req.body));
	console.log("files + " + JSON.stringify(req.files));

	if ((!user, !title, !text)) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const postObject = {
		user,
		title,
		text,
		image: req.files.image[0].filename,
		image_wide: req.files.image_wide[0].filename,
		image_mobile: req.files.image_mobile[0].filename,
		// image: {
		// 	data: fs.readFileSync(
		// 		path.join(__dirname, "/../uploads/" + req.file.filename)
		// 	),
		// 	contentType: "image/png",
		// },
	};

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
