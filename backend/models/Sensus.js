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
		required: false,
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
	},
	province: {
		type: String,
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
	district: {
		type: String,
		required: false,
	},
	idnZCode: {
		type: String,
		required: false,
	},

	// UK ADRESS
	ukAddress: {
		type: String,
		required: false,
	},
	ukZCode: {
		type: String,
		required: false,
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
		},
	],
});

module.exports = mongoose.model("Sensus", sensusSchema);
