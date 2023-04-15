const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler");

// @desc Get Student
// @route Get /posts
// @access Private
const getAllStudents = asyncHandler(async (req, res) => {
    const students = await Sensus.find();
    if (students) {
        return res.json(students);
    } else {
        return res.status(400).json({ message: "Error finding sensus" });
    }
});
