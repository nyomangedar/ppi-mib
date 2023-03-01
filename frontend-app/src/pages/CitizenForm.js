import React, { useState, useEffect } from "react";
import StudentEdu from "../components/RegisterForm/StudentEdu";
import arrow from "../image/formAsset/arrow-back.svg";
import { Button } from "react-bootstrap";
import ContactIndo from "../components/RegisterForm/ContactIndo";
import ContactUK from "../components/RegisterForm/ContactUK";
import CitBasicInfo from "../components/RegisterForm/Citizen/CitBasicInfo";
import Family from "../components/RegisterForm/Citizen/Family";
import WarningModal from "../components/RegisterForm/WarningModal";

function CitizenForm() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 5;

	const [familyStatus, setFamilyStatus] = useState(false);
	const [showWarningModal, setShowWarningModal] = useState(false);
	const [unfilledFields, setUnfilledFields] = useState([]);

	const [citizenFormData, setCitizenFormData] = useState({
		idnEmergencyRelationship: "",
		idnEmergencyPhone: "",
		idnEmergencyName: "",
		ukEmergencyRelationship: "",
		ukEmergencyPhone: "",
		ukEmergencyName: "",
		graduateYear: null,
		entryYear: null,
		company: "",
		occupation: "",
		stayPeriod: null,
		permanentResident: null,
		funding: "",
		course: "",
		university: "",
		degree: "",
		ukZCode: "",
		ukAddress: "",
		idnZCode: "",
		district: "",
		city: "",
		province: "",
		indonesianAddress: "",
		religion: "",
		relationshipStatus: "",
		password: "",
		email: "",
		dob: null,
		indonesianPhoneNumber: null,
		ukPhoneNumber: null,
		fullName: "",
		families: [
			{
				fullname: "",
				relationship: "",
				dob: null,
			},
		],
	});

	const getUnfilledFields = (formData, currentPage) => {
		let unfilledFields = [];

		if (currentPage === 1) {
			if (formData.fullName === "") unfilledFields.push("Full Name");
			if (formData.ukPhoneNumber === null)
				unfilledFields.push("UK Phone Number");
			if (formData.indonesianPhoneNumber === null)
				unfilledFields.push("Indonesian Phone Number");
			if (formData.email === "") unfilledFields.push("Email");
			if (formData.relationshipStatus === "")
				unfilledFields.push("Relationship Status");
			if (formData.religion === "") unfilledFields.push("Religion");
			if (formData.indonesianAddress === "")
				unfilledFields.push("Indonesian Address");
			if (formData.province === "") unfilledFields.push("Province");
			if (formData.city === "") unfilledFields.push("City");
			if (formData.district === "") unfilledFields.push("District");
			if (formData.idnZCode === "") unfilledFields.push("Indonesian Zip Code");
			if (formData.ukAddress === "") unfilledFields.push("UK Address");
			if (formData.ukZCode === "") unfilledFields.push("UK Zip Code");
			if (formData.permanentResident === null && formData.stayPeriod === null)
				unfilledFields.push("Address Status");
			if (
				formData.permanentResident === "false" &&
				formData.stayPeriod === null
			)
				unfilledFields.push("End Term Date");
			if (formData.occupation === "") unfilledFields.push("Occupation");
			if (formData.company === "") unfilledFields.push("Company");
		} else if (currentPage === 2) {
			if (formData.degree === "") unfilledFields.push("Degree");
			if (formData.university === "") unfilledFields.push("University");
			if (formData.course === "") unfilledFields.push("Course");
			if (formData.funding === "") unfilledFields.push("Funding");
			if (formData.entryYear === null) unfilledFields.push("Entry Year");
			if (formData.graduateYear === null) unfilledFields.push("Graduate Year");
		} else if (currentPage === 3) {
			// if (!formData.field3) {
			// 	unfilledFields.push("Field 3");
			// }
		} else if (currentPage === 4) {
			if (formData.idnEmergencyName === "") unfilledFields.push("Name");
			if (formData.idnEmergencyPhone === "")
				unfilledFields.push("Phone Number");
			if (formData.idnEmergencyRelationship === "")
				unfilledFields.push("Relationship");
		} else if (currentPage === 5) {
			if (formData.ukEmergencyName === "") unfilledFields.push("Name");
			if (formData.ukEmergencyPhone === "") unfilledFields.push("Phone Number");
			if (formData.ukEmergencyRelationship === "")
				unfilledFields.push("Relationship");
		}

		return unfilledFields;
	};

	const onChange = (e) => {
		setCitizenFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log(e.target.value);
	};

	const familyChange = (index, event) => {
		const { name, value } = event.target;
		setCitizenFormData((prevState) => {
			const families = [...prevState.families];
			families[index] = {
				...families[index],
				[name]: value,
			};
			return {
				...prevState,
				families,
			};
		});
		// console.log(citizenFormData.families[index]);
	};

	const handleAddFamilyMember = () => {
		setCitizenFormData((prevState) => ({
			...prevState,
			families: [
				...prevState.families,
				{
					fullname: "",
					relationship: "",
					dob: null,
				},
			],
		}));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	const handleNext = () => {
		const unfilled = getUnfilledFields(citizenFormData, currentPage);
		// const unfilled = [];

		if (unfilled.length > 0) {
			setUnfilledFields(unfilled);
			setShowWarningModal(true);
		} else if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		} else {
			// console.log("Submitting form:", formData);
			console.log("Max page");
			// submit form here
		}
	};

	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else {
			return;
			// submit form here
		}
	};

	const submitForm = () => {
		return;
	};

	const title = [
		"Citizen's Basic Information",
		"Citizen's Education",
		"Citizen's Family",
		"Citizen's Emergency Contact in Indonesia",
		"Citizen's Emergency Contact in UK",
	];

	return (
		<>
			<WarningModal
				show={showWarningModal}
				toggle={() => setShowWarningModal(!showWarningModal)}
				unfilledFields={unfilledFields}
			/>
			<div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
				<div class="container text-center">
					<h1 class="align-items-center form-header">
						{title[currentPage - 1]}
					</h1>
				</div>
				<div class="container text-center p-5">
					<h2 class="align-items-center">Progress Bar</h2>
				</div>
				{currentPage === 1 && (
					<CitBasicInfo data={citizenFormData} onChange={onChange} />
				)}
				{currentPage === 2 && (
					<StudentEdu data={citizenFormData} onChange={onChange} />
				)}
				{currentPage === 3 && (
					<Family
						data={citizenFormData}
						onChange={familyChange}
						addFamily={handleAddFamilyMember}
						familyStatus={familyStatus}
						setFamilyStatus={setFamilyStatus}
					/>
				)}
				{currentPage === 4 && (
					<ContactIndo data={citizenFormData} onChange={onChange} />
				)}
				{currentPage === 5 && (
					<ContactUK data={citizenFormData} onChange={onChange} />
				)}
			</div>
			<div class="button-col d-flex justify-content-center py-5">
				<Button
					className="form-prev d-flex align-items-center px-4 me-5"
					onClick={() => handlePrev()}
				>
					<img src={arrow} className="me-4" />
					<span class="text-center fs-4">Previous</span>
				</Button>
				<Button
					className="form-next d-flex align-items-center px-4"
					style={{ background: "#1D1D59 !important" }}
					onClick={() => {
						currentPage === totalPages ? submitForm() : handleNext();
						console.log(citizenFormData);
					}}
				>
					<img
						src={arrow}
						style={{
							transform: "scaleX(-1)",
							marginRight: "30px",
						}}
					/>
					<span class="text-center fs-4">
						{currentPage === totalPages ? "Submit" : "Proceed"}
					</span>
				</Button>
			</div>
		</>
	);
}

export default CitizenForm;
