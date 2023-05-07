const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const sensusSchema = new mongoose.Schema(
	{
		// BASIC INFORMATION
		fullName: {
			type: String,
			required: true,
		},
		phoneNumber1: {
			type: String,
			required: true,
			get: (encryptData) => {
				// Decrypt the data field using the secret key
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
		phoneNumber2: {
			type: String,
			required: false,
			get: (encryptData) => {
				// Decrypt the data field using the secret key
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
			required: true,
		},
		ukEmergencyPhone: {
			type: String,
			required: true,
			get: (encryptData) => {
				// Decrypt the data field using the secret key
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
			get: (encryptData) => {
				// Decrypt the data field using the secret key
				const bytes = CryptoJS.AES.decrypt(encryptData, process.env.SECRET_KEY);
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
			required: true,
		},

		// FAMILY
		families: [
			{
				fullname: {
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
				nationality: {
					type: String,
					required: true,
				},
				dependant: {
					type: String,
					required: false,
				},
			},
		],
	},
	{ toJSON: { getters: true } }
);

module.exports = mongoose.model("Sensus", sensusSchema);
