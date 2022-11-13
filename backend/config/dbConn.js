const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.NODE_ENV == "development"
                ? process.env.DEV_DATABASE_URI
                : process.env.DATABASE_URI
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
