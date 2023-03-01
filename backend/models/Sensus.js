const mongoose = require("mongoose");

const sensusSchema = new mongoose.Schema({
    // BASIC INFORMATION
    fullName: {
        type: String,
        required: true,
    },
    ukPhoneNumber: {
        type: String,
        required: true,
    },
    indonesianPhoneNumber: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    // RELATIONSHIP
    relationshipStatus: {
        type: String,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },

    // ADDRESS
    // INDONESIAN ADDRESS
    indonesianAddress: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    idnZCode: {
        type: String,
        required: true,
    },

    // UK ADRESS
    ukAddress: {
        type: String,
        required: true,
    },
    ukZCode: {
        type: String,
        required: true,
    },
    stayPeriod: {
        type: Date,
        required: false,
    },

    //EDUCATION
    degree: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    funding: {
        type: String,
        required: true,
    },
    entryYear: {
        type: Number,
        required: true,
    },
    graduateYear: {
        type: Number,
        required: true,
    },
    studentId: {
        type: String,
        required: false,
    },

    // UKCONTACT
    ukEmergencyName: {
        type: String,
        required: true,
    },
    ukEmergencyPhone: {
        type: String,
        required: true,
    },
    ukEmergencyRelationship: {
        type: String,
        required: true,
    },

    // IDNCONTACT
    idnEmergencyName: {
        type: String,
        required: true,
    },
    idnEmergencyPhone: {
        type: String,
        required: true,
    },
    idnEmergencyRelationship: {
        type: String,
        required: true,
    },

    // FAMILY
    families: [
        {
            fullName: {
                type: String,
                required: true,
            },
            relationship: {
                type: String,
                required: true,
            },
            dob: {
                type: Date,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model("Sensus", sensusSchema);
