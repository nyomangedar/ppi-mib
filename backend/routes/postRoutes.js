const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router
	.route("/")
	.get(postController.getAllPost)
	.post(postController.createNewPost);
// .patch(postController.editPost)
// .delete(postController.deletePost);

module.exports = router;
