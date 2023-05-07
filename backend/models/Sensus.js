const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const sensusSchema = new mongoose.Schema(
    {
        // BASIC INFORMATION
        fullName: {
            type: String,
            required: true,
        },
        ukPhoneNumber: {
            type: String,
            required: true,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        indonesianPhoneNumber: {
            type: String,
            required: true,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        dob: {
            type: Date,
            required: true,
        },
        email: {
            type: String,
            required: true,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        password: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
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
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        province: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        city: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        district: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        idnZCode: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },

        // UK ADRESS
        ukAddress: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                console.log({ encryptData });
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        ukZCode: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        stayPeriod: {
            type: Date,
            required: false,
        },

        //EDUCATION
        education: [
            {
                degree: {
                    type: String,
                    required: true,
                },
                university: {
                    type: String,
                    required: true,
                },
                otherUni: {
                    type: String,
                    required: false,
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
            },
        ],

        // UKCONTACT
        ukEmergencyName: {
            type: String,
            required: false,
        },
        ukEmergencyPhone: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        ukEmergencyRelationship: {
            type: String,
            required: false,
        },

        // IDNCONTACT
        idnEmergencyName: {
            type: String,
            required: false,
        },
        idnEmergencyPhone: {
            type: String,
            required: false,
            get: (encryptData) => {
                // Decrypt the data field using the secret key
                const bytes = CryptoJS.AES.decrypt(
                    encryptData,
                    process.env.SECRET_KEY
                );
                const data = bytes.toString(CryptoJS.enc.Utf8);

                return data;
            },
            set: (data) => {
                // Encrypt the data field using the secret key
                const encrypted = CryptoJS.AES.encrypt(
                    data,
                    process.env.SECRET_KEY
                ).toString();

                return encrypted;
            },
        },
        idnEmergencyRelationship: {
            type: String,
            required: false,
        },

        // FAMILY
        families: [
            {
                fullname: {
                    type: String,
                    required: false,
                },
                relationship: {
                    type: String,
                    required: false,
                },
                dob: {
                    type: Date,
                    required: false,
                },
                nationality: {
                    type: String,
                    required: false,
                },
                dependant: {
                    type: String,
                    required: false,
                },
            },
        ],
    },
    { toJSON: { getters: true } }
    // { toObject: { getters: true } }
);

module.exports = mongoose.model("Sensus", sensusSchema);
