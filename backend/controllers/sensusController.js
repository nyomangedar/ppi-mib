const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const CryptoJS = require("crypto-js");

// @desc Register new sensus
// @route POST /sensus
// @access Public
const createNewSensus = asyncHandler(async (req, res) => {
    const sensus = req.body;

    // Hash password
    // const salt = await bcrypt.genSalt(10);
    // sensus.password = await bcrypt.hash(sensus.password, salt);
    console.log({sensus})
    try {
        await Sensus.create(sensus);
        res.status(201).json({ message: `New Sensus ${sensus.email} created` });
    } catch (err) {
        res.status(400).json({ mesage: "Invalid user data" });
    }
});

// @desc Get Sensus Data
// @route POST /sensus/check-email
// @access Public
const checkEmailData = asyncHandler(async (req, res) => {
    const email = req.body.email;

    const result = await Sensus.find({});

    const existingEmail = result.filter((d) => d.email === email);
    if (existingEmail.length > 0) {
        // console.log({ existingEmail });
        res.status(400);
        throw new Error("Exist email");
    } else {
        res.status(200).json({ message: "Clear" });
    }
});

const getAlumniFullName = asyncHandler(async (req, res) => {
    const lastYear = new Date().getFullYear() - 1
    const alumni = await Sensus.find({
        education: {
            $elemMatch: {
                graduateYear: { $lte: lastYear },
                university: "University of Birmingham",
            },
        },
    });
    let result = [];
    alumni.forEach((element) => {
        result.push(element)
        // result.push({ name: element.fullName, email: element.email });
    });
    res.status(200).json(result);
});

const getStudentFullName = asyncHandler(async (req, res) => {
    const currentYear = new Date().getFullYear()
    const university = req.body.university
    const student = await Sensus.find({
        education: {
            $elemMatch: {
                graduateYear: { $gte: currentYear },
                university: university,
            },
        },
    });
    let result = [];
    student.forEach((element) => {
        result.push(element)
        // result.push({ name: element.fullName, email: element.email });
    });

    res.status(200).json(result);
});

const getCitizen = asyncHandler(async (req,res) => {
    const citizens = await Sensus.find({
        stayPeriod: null
    })
    res.status(200).json(citizens)
})

const getAllSensus = asyncHandler(async (req,res) => {
    const sensuss = await Sensus.find()

    res.status(200).json(sensuss)
})

module.exports = {
    createNewSensus,
    checkEmailData,
    getAlumniFullName,
    getStudentFullName,
    getAllSensus,
    getCitizen
};
