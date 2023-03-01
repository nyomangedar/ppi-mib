import React, { useState, useEffect } from "react";
import BasicInfo from "../components/RegisterForm/BasicInfo";
import StudentEdu from "../components/RegisterForm/StudentEdu";
import arrow from "../image/formAsset/arrow-back.svg";
import { Button } from "react-bootstrap";
import ContactIndo from "../components/RegisterForm/ContactIndo";
import ContactUK from "../components/RegisterForm/ContactUK";

function AlumniForm() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 2;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	const handleNext = () => {
		if (currentPage < totalPages) {
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

	const title = ["Alumni's Basic Information", "Alumni's Education"];

	return (
		<>
			<div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
				<div class="container text-center">
					<h1 class="align-items-center form-header">
						{title[currentPage - 1]}
					</h1>
				</div>
				<div class="container text-center p-5">
					<h2 class="align-items-center">Progress Bar</h2>
				</div>
				{currentPage === 1 && <BasicInfo />}
				{currentPage === 2 && <StudentEdu />}
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
						currentPage === 2 ? submitForm() : handleNext();
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
						{currentPage === 2 ? "Submit" : "Proceed"}
					</span>
				</Button>
			</div>
		</>
	);
}

export default AlumniForm;
