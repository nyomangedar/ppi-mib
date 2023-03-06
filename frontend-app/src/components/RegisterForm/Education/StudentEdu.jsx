import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NumericFormat, PatternFormat } from "react-number-format";
import InputMask from "react-input-mask";
import { useMediaQuery } from "react-responsive";
import plus from "../../../image/formAsset/plus-button.svg";

function StudentEdu(props) {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const [entryDateError, setEntryDateError] = useState("");
	const [gradDateError, setGradDateError] = useState("");

	function handleBlur(index, event) {
		const { name, value } = event.target;
		const inputYear = value;
		if (
			inputYear.length > 0 &&
			(inputYear.length !== 4 || parseInt(inputYear) > new Date().getFullYear())
		) {
			props.setCitizenFormData((prevState) => {
				const education = [...prevState.education];
				education[index] = {
					...education[index],
					[name]: "",
				};
				return {
					...prevState,
					education,
				};
			});
			setEntryDateError("Entry year is not valid");
		} else {
			setEntryDateError("");
		}
	}

	function handleBlurGrad(index, event) {
		const { name, value } = event.target;
		const inputYear = value;
		if (
			inputYear.length > 0 &&
			(inputYear.length !== 4 ||
				props.data.entryYear === "" ||
				parseInt(inputYear) <= props.data.entryYear)
		) {
			props.setCitizenFormData((prevState) => {
				const education = [...prevState.education];
				education[index] = {
					...education[index],
					[name]: "",
				};
				return {
					...prevState,
					education,
				};
			});
			setGradDateError(
				props.data.entryYear !== ""
					? "Graduate year must be greater than entry year"
					: "You must enter your entry year first"
			);
		} else {
			setGradDateError("");
		}
	}

	const educationChange = (index, event) => {
		const { name, value } = event.target;
		props.setCitizenFormData((prevState) => {
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
		// console.log(citizenFormData.families[index]);
	};

	const uniChange = (index, event) => {
		const { name, value } = event.target;
		props.setCitizenFormData((prevState) => {
			const education = [...prevState.education];
			education[index] = {
				...education[index],
				[name]: value,
				["otherUni"]: "",
			};
			return {
				...prevState,
				education,
			};
		});
		// console.log(citizenFormData.families[index]);
	};

	const handleRemoveEducation = (index) => {
		props.setCitizenFormData((prevState) => {
			const updatedEducation = [...prevState.education];
			updatedEducation.splice(index, 1);
			return {
				...prevState,
				education: updatedEducation,
			};
		});
	};

	return (
		<>
			<div>
				<form>
					<h3 className="mb-3 fw-bold" style={{ fontWeight: "500" }}>
						Education {props.index + 1}
					</h3>
					<div class="mb-4">
						<label class="form-label input-label">
							Degree <span style={{ color: "red" }}>*</span>
						</label>
						<select
							class="form-select form-input"
							aria-label="Default select example"
							id="degree"
							name="degree"
							value={props.data.degree}
							onChange={(event) => educationChange(props.index, event)}
							required
						>
							<option value="" selected disabled hidden>
								Open this select menu
							</option>
							<option value="bachelor">Bachelor</option>
							<option value="masters">Masters</option>
							<option value="phd">PhD</option>
						</select>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							University <span style={{ color: "red" }}>*</span>
						</label>
						<select
							class="form-select form-input mb-4"
							aria-label="Default select example"
							id="university"
							name="university"
							value={props.data.university}
							onChange={(event) => uniChange(props.index, event)}
							required
						>
							<option value="" selected disabled hidden>
								Open this select menu
							</option>
							<option value="University of Birmingham">
								University of Birmingham
							</option>
							<option value="Aston University">Aston University</option>
							<option value="Birmingham City University">
								Birmingham City University
							</option>
							<option value="other">Other</option>
						</select>
						<div
							class="mb-4"
							style={{
								display: props.data.university === "other" ? "" : "none",
							}}
						>
							<label class="form-label input-label">
								Other <span style={{ color: "red" }}>*</span>
							</label>
							<input
								type="text"
								class="form-control form-input"
								id="otherUni"
								name="otherUni"
								value={props.data.otherUni}
								onChange={(event) => educationChange(props.index, event)}
								aria-describedby="otherUniHelp"
								placeholder="Fill in.."
								required
							/>
						</div>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Course <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="course"
							name="course"
							value={props.data.course}
							onChange={(event) => educationChange(props.index, event)}
							aria-describedby="courseHelp"
							placeholder="Course"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Funding <span style={{ color: "red" }}>*</span>
						</label>
						<select
							class="form-select form-input"
							aria-label="Default select example"
							id="funding"
							name="funding"
							value={props.data.funding}
							onChange={(event) => educationChange(props.index, event)}
							required
						>
							<option value="" selected disabled hidden>
								Open this select menu
							</option>
							<option value="self-funded">Self-funded</option>
							<option value="scholarship">Scholarship</option>
						</select>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Entry Year <span style={{ color: "red" }}>*</span>
						</label>
						<InputMask
							type="text"
							class="form-control form-input mb-2"
							onBlur={(event) => handleBlur(props.index, event)}
							id="entryYear"
							name="entryYear"
							value={props.data.entryYear}
							onChange={(event) => educationChange(props.index, event)}
							mask={"9999"}
							maskChar={null}
							formatChars={{
								9: "[0-9]",
							}}
							aria-describedby="entryYearHelp"
							placeholder="Entry Year"
							required
						/>
						{entryDateError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{entryDateError}
							</div>
						)}
					</div>
					<div
						class="mb-4"
						style={{ display: props.data.entryYear === "" ? "none" : "" }}
					>
						<label class="form-label input-label">
							Graduate Year <span style={{ color: "red" }}>*</span>
						</label>
						<InputMask
							type="text"
							class="form-control form-input mb-2"
							onBlur={(event) => handleBlurGrad(props.index, event)}
							id="graduateYear"
							name="graduateYear"
							value={props.data.graduateYear}
							onChange={(event) => educationChange(props.index, event)}
							mask={"9999"}
							maskChar={null}
							formatChars={{
								9: "[0-9]",
							}}
							aria-describedby="graduateYearHelp"
							placeholder="Graduate Year"
							required
						/>
						{gradDateError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{gradDateError}
							</div>
						)}
					</div>
					{/* <div class="mb-4">
						<label class="form-label input-label">
							Student ID Card/CAS/LoA <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="file"
							class="form-control form-input"
							id="course"
							name="course"
							aria-describedby="courseHelp"
							placeholder="Course"
							// required
						/>
					</div> */}
					<div
						class="button-col me-0 mb-4"
						style={{ display: props.index > 0 ? "" : "none" }}
					>
						<Button
							className="remove-family d-flex align-items-center"
							onClick={() => {
								handleRemoveEducation(props.index);
								// props.setFamilyCount(props.familyCount + 1);
							}}
						>
							<img src={plus} className="me-2" style={{ rotate: "45deg" }} />
							<span class="text-center fs-4">Remove</span>
						</Button>
					</div>
					<hr class="divider-basic mb-4" />

					{/* <button type="submit" class="btn btn-primary">
							Submit
						</button> */}
				</form>
			</div>
		</>
	);
}

export default StudentEdu;
