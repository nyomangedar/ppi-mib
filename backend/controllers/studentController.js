const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler");

// @desc Get Student
// @route Get /posts
// @access Private
const getStudentData = asyncHandler(async (req,res)=>{
    const student = await Sensus.find({
        education: {
            $elemMatch:{
                graduateYear: {$gte: 2023},

            }
        }
    })
    let result = []
    student.forEach((element) => {
        result.push({name: element.fullName, email: element.email, university: element.education.university, degree: element.education.degree})\
    })
    res.status(200).json(result)
})

module.exports = {
    getStudentData
}