const Sensus = require("../models/Sensus");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
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

    const newSensus = await Sensus.create(sensus);

    if (newSensus) {
        res.status(201).json({ message: `New Sensus ${sensus.email} created` });
    } else {
        res.status(400).json({ mesage: "Invalid user data" });
    }
    // res.json(Sensus.schema.requiredPaths());
});
module.exports = {
    createNewSensus,
};
