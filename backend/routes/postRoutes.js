const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "/../uploads"));
	},
	filename: (req, file, cb) => {
		cb(null, file.filename + "-" + Date.now());
	},
});

var upload = multer({ storage: storage });

router
	.route("/")
	.get(postController.getAllPost)
	.post(upload.single("image"), postController.createNewPost);
// .patch(postController.editPost)
// .delete(postController.deletePost);

module.exports = router;
