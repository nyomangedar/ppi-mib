const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")


//@desc Get Alumni email and fullname
//@route GET /alumni/getdata
//@access private
const getAlumniData = asyncHandler(async (req,res)=>{
    const alumni = await Sensus.find({
        education: {
            $elemMatch: {
                graduateYear: {$lte: 2022},
                university: "University of Birmingham"
            }
        }
    });
    let result = []
    alumni.forEach((element) => {
        result.push({name: element.fullName, email:element.email})

    })
    res.status(200).json(result)
})


module.exports = {
    getAlumniData,
}