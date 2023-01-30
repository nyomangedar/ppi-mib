const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

// @desc Get all users
// @route GET /posts
// @access Public
const getAllPost = asyncHandler(async (req, res) => {
	console.log("Masuk get post");
	// Get all posts from Database
	const posts = await Post.find({ activeStatus: true })
		.sort({ updatedAt: -1 })
		.lean();

	if (!posts?.length) {
		return res.status(400).json({ message: "No posts found" });
	}

	res.json(posts);
});

// @desc Create new post for Carousel
// @route POST /posts
// @access Private
const createNewPost = asyncHandler(async (req, res) => {
	const { user, title, text, link, activeStatus } = req.body;

	console.log(JSON.stringify(req.body));
	console.log("files + " + JSON.stringify(req.files));

	if (!user || !title || !text || !activeStatus) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const postObject = {
		user,
		title,
		text,
		link,
		activeStatus,
		image: req.files.image[0].filename,
		image_wide: req.files.image_wide[0].filename,
		image_mobile: req.files.image_mobile[0].filename,
	};

	const post = await Post.create(postObject);

	if (post) {
		res.status(201).json({ message: `New post created` });
	} else {
		res.status(400).json({ message: "Invalid post data" });
	}
});

// @desc Update post for carousel
// @route PATCH /posts
// @access Private
const updatePost = asyncHandler(async (req, res) => {
	const { id, user, title, text, link, activeStatus, imageUpdate } = req.body;

	if (!user || !title || !text || !activeStatus || !id) {
		return res.status(400).json({ message: "All fields are required" });
	}

	// Confirm post exists to update
	const post = await Post.findById(id).exec();

	if (!post) {
		return res.status(400).json({ message: "Post not found" });
	}

	const duplicate = await Post.findOne({ title })
		.collation({ locale: "en", strength: 2 })
		.lean()
		.exec();

	if (duplicate && duplicate?._id.toString() !== id) {
		return res.status(409).json({ message: "Duplicate Post Title" });
	}

	if (imageUpdate) {
		post.user = user;
		post.title = title;
		post.text = text;
		post.link = link;
		post.activeStatus = activeStatus;
		post.image = req.files.image[0].filename;
		post.image_wide = req.files.image_wide[0].filename;
		post.image_mobile = req.files.image_mobile[0].filename;
	} else {
		post.user = user;
		post.title = title;
		post.text = text;
		post.link = link;
		post.activeStatus = activeStatus;
	}

	const updatedPost = await post.save();

	res.json(`'${updatedPost.title}' updated`);
});

// @desc Delete Post
// @route DETELE /posts
// @access Private
const deletePost = asyncHandler(async (req, res) => {
	const { id } = req.body;

	if (!id) {
		return res.status(400).json({ message: "Post ID required" });
	}

	const post = await Post.findById(id).exec();

	if (!post) {
		return res.status(400).json({ message: "Post not found" });
	}

	const result = await post.deleteOne();

	const response = `Note '${result.title} with ID ${result._id} has been deleted`;

	res.json(response);
});

module.exports = {
	getAllPost,
	createNewPost,
	updatePost,
	deletePost,
};
