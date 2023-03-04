import React, { useState, useEffect } from "react";
import arrow from "../image/formAsset/arrow-back.svg";
import { Button } from "react-bootstrap";
import WarningModal from "../components/RegisterForm/WarningModal";
import FormBreadCrumb from "../components/RegisterForm/FormBreadcrumb";
import isFieldEmpty from "../tools/emptyField";
import { useMediaQuery } from "react-responsive";
import Education from "../components/RegisterForm/Education/Education";
import BasicInfo from "../components/RegisterForm/BasicInfo";

function CitizenForm() {
	const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 2;

	const [showWarningModal, setShowWarningModal] = useState(false);
	const [unfilledFields, setUnfilledFields] = useState([]);

	const [studentFormData, setStudentFormData] = useState({
		idnEmergencyRelationship: "",
		idnEmergencyPhone: "",
		idnEmergencyName: "",
		ukEmergencyRelationship: "",
		ukEmergencyPhone: "",
		ukEmergencyName: "",
		company: "",
		occupation: "",
		stayPeriod: null,
		permanentResident: null,
		education: [
			{
				degree: "",
				funding: "",
				course: "",
				university: "",
				otherUni: "",
				graduateYear: null,
				entryYear: null,
			},
		],
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
		dob: "",
		indonesianPhoneNumber: "",
		ukPhoneNumber: "",
		fullName: "",
		families: [],
		// 	{
		// 		fullname: "",
		// 		relationship: "",
		// 		dob: null,
		// 	},
		// ],
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	const getUnfilledFields = (formData, currentPage) => {
		let unfilledFields = [];

		if (currentPage === 1) {
			if (isFieldEmpty(formData.fullName)) unfilledFields.push("Full Name");
			if (isFieldEmpty(formData.ukPhoneNumber))
				unfilledFields.push("UK Phone Number");
			if (isFieldEmpty(formData.indonesianPhoneNumber))
				unfilledFields.push("Indonesian Phone Number");
			if (isFieldEmpty(formData.email)) unfilledFields.push("Email");
			// if (formData.relationshipStatus))
			if (isFieldEmpty(formData.relationshipStatus))
				unfilledFields.push("Relationship Status");
			if (isFieldEmpty(formData.religion)) unfilledFields.push("Religion");
			if (isFieldEmpty(formData.indonesianAddress))
				unfilledFields.push("Indonesian Address");
			if (isFieldEmpty(formData.province)) unfilledFields.push("Province");
			if (isFieldEmpty(formData.city)) unfilledFields.push("City");
			if (isFieldEmpty(formData.district)) unfilledFields.push("District");
			if (isFieldEmpty(formData.idnZCode))
				unfilledFields.push("Indonesian Zip Code");
			if (isFieldEmpty(formData.ukAddress)) unfilledFields.push("UK Address");
			if (isFieldEmpty(formData.ukZCode)) unfilledFields.push("UK Zip Code");
			if (formData.permanentResident === null && formData.stayPeriod === null)
				unfilledFields.push("Address Status");
			if (
				formData.permanentResident === "false" &&
				formData.stayPeriod === null
			)
				unfilledFields.push("End Term Date");
		} else if (currentPage === 2) {
			formData.education.map((item, index) => {
				if (isFieldEmpty(item.degree))
					unfilledFields.push(`Education ${index + 1}: Degree`);
				if (isFieldEmpty(item.university)) {
					unfilledFields.push(`Education ${index + 1}: University`);
				}
				if (item.university === "other") {
					if (isFieldEmpty(item.otherUni))
						unfilledFields.push(`Education ${index + 1}: University`);
				}
				if (isFieldEmpty(item.course))
					unfilledFields.push(`Education ${index + 1}: Course`);
				if (isFieldEmpty(item.funding))
					unfilledFields.push(`Education ${index + 1}: Funding`);
				if (item.entryYear === null)
					unfilledFields.push(`Education ${index + 1}: Entry Year`);
				if (item.graduateYear === null)
					unfilledFields.push(`Education ${index + 1}: Graduate Year`);
			});
		}
		return unfilledFields;
	};

	const onChange = (e) => {
		setStudentFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log(e.target.value);
	};

	const educationChange = (index, event) => {
		const { name, value } = event.target;
		setStudentFormData((prevState) => {
			const education = [...prevState.education];
			education[index] = {
				...education[index],
				[name]: value,
			};
			return {
				...prevState,
				education,
			};
		});
		// console.log(studentFormData.families[index]);
	};

	const handleAddEducation = () => {
		setStudentFormData((prevState) => ({
			...prevState,
			education: [
				...prevState.education,
				{
					degree: "",
					funding: "",
					course: "",
					university: "",
					otherUni: "",
					graduateYear: null,
					entryYear: null,
				},
			],
		}));
		console.log(studentFormData);
	};

	const handleRemoveEducation = (index) => {
		setStudentFormData((prevState) => {
			const updatedEducation = [...prevState.education];
			updatedEducation.splice(index, 1);
			return {
				...prevState,
				education: updatedEducation,
			};
		});
	};

	const handleNext = (index) => {
		// const unfilled = [];
		if (index < currentPage) {
			if (currentPage !== 0) {
				setCurrentPage(index);
			} else {
				console.log("First Page");
			}
		} else {
			let unfilled = getUnfilledFields(studentFormData, currentPage);
			if (unfilled.length > 0) {
				setUnfilledFields(unfilled);
				setShowWarningModal(true);
			} else if (currentPage < totalPages) {
				setCurrentPage(index);
			} else {
				submitForm();
				console.log("Max page");
				// submit form here
			}
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

	const title = ["Alumni's Basic Information", "Alumni's Education"];

	const activateCurrent = (index) => {
		return currentPage === index;
	};

	const progressTracker = (index) => {
		return index < currentPage;
	};

	const crumbs = [
		{
			active: activateCurrent(1),
			progress: progressTracker(1),
			end: false,
			title: "Basic Information",
			path: 1,
		},
		{
			active: activateCurrent(2),
			progress: progressTracker(2),
			end: true,
			title: "Education",
			path: 2,
		},
	];

	return (
		<>
			<WarningModal
				show={showWarningModal}
				toggle={() => setShowWarningModal(!showWarningModal)}
				unfilledFields={unfilledFields}
				page={currentPage}
			/>
			<div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
				<div class="container text-center mb-3">
					<h1 class="align-items-center form-header">
						{title[currentPage - 1]}
					</h1>
				</div>
				<div
					class="container text-center py-5"
					style={{ display: isMobile ? "none" : "" }}
				>
					<FormBreadCrumb
						crumbs={crumbs}
						onClick={handleNext}
						currentIndex={currentPage}
					/>
				</div>
				{currentPage === 1 && (
					<BasicInfo data={studentFormData} onChange={onChange} />
				)}
				{currentPage === 2 && (
					<Education
						data={studentFormData}
						onChange={educationChange}
						addEducation={handleAddEducation}
						removeEducation={handleRemoveEducation}
					/>
				)}
			</div>
			<div class="button-col d-flex justify-content-center py-5">
				<div style={{ display: currentPage === 1 ? "none" : "" }}>
					<Button
						className="form-prev d-flex align-items-center px-4 me-5"
						onClick={() => handlePrev()}
					>
						<img src={arrow} className="me-4" />
						<span class="text-center fs-4">Previous</span>
					</Button>
				</div>
				<Button
					className="form-next d-flex align-items-center px-4"
					style={{ background: "#1D1D59 !important" }}
					onClick={() => {
						handleNext(currentPage + 1);
						console.log(studentFormData);
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
