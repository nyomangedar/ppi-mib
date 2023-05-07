const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const CryptoJS = require("crypto-js");

function enc(data) {
    // Decrypt the data field using the secret key
    const encrypted = CryptoJS.AES.encrypt(
        data,
        process.env.SECRET_KEY
    ).toString();
    console.log(encrypted);

    return encrypted;
}
function dec(data) {
    // Encrypt the data field using the secret key
    const encrypted = CryptoJS.AES.encrypt(
        data,
        process.env.SECRET_KEY
    ).toString();

    return encrypted;
}

// @desc Register new sensus
// @route POST /sensus
// @access Public
const createNewSensus = asyncHandler(async (req, res) => {
    const sensus = req.body;

    // Hash password
    // const salt = await bcrypt.genSalt(10);
    // sensus.password = await bcrypt.hash(sensus.password, salt);

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

module.exports = {
    createNewSensus,
    checkEmailData,
};
