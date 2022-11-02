const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const postSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			default: "",
		},
		activeStatus: {
			type: Boolean,
			default: true,
		},
		image: {
			data: Buffer,
			contentType: String,
		},
	},
	{
		timestamps: true,
	}
);

postSchema.plugin(AutoIncrement, {
	inc_field: "ticket",
	id: "ticketNums",
	start_seq: 1,
});

module.exports = mongoose.model("Post", postSchema);
