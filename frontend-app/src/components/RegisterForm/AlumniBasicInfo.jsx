import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import provinceList from "./provinceList";
import Select from "react-select";
import InputMask from "react-input-mask";
// import { useMediaQuery } from "react-responsive";

function AlumniBasicInfo(props) {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: "(min-width: 1224px)",
	// });
	// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const [otherStatus, setOtherStatus] = useState(false);
	const [permanentResident, setPermanentResident] = useState(null);
	const [selectedProvince, setSelectedProvince] = useState(null);

	const today = new Date().toISOString().substring(0, 10);

	const [telUkError, setTelUkError] = useState("");
	const [telIdError, setTelIdError] = useState("");

	function handleTelUkBlur(event) {
		const { name, value } = event.target;
		let inputPhone = value;
		if (inputPhone.length < 10) {
			props.setCitizenFormData((prevState) => ({
				...prevState,
				[name]: "",
			}));
			setTelUkError("Please enter a valid phone number");
		} else {
			setTelUkError("");
		}
	}

	function handleTelIdBlur(event) {
		const { name, value } = event.target;
		let inputPhone = value;
		if (inputPhone.length < 10) {
			props.setCitizenFormData((prevState) => ({
				...prevState,
				[name]: "",
			}));
			setTelIdError("Please enter a valid phone number");
		} else {
			setTelIdError("");
		}
	}

	const handleProvinceChange = (selectedOption, { name }) => {
		props.setCitizenFormData((prevState) => ({
			...prevState,
			[name]: selectedOption.value,
		}));
		setSelectedProvince(selectedOption);
		// console.log(selectedOption);
	};

	const handleDobChange = (e) => {
		if (e.target.value <= today) {
			props.setDateError("");
			props.setCitizenFormData((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}));
		} else {
			props.setDateError("Future date is not valid for date of birth");
		}
	};

	const stayPeriodBlur = (event) => {
		const { name, value } = event.target;
		const inputYear = value;
		if (inputYear.length > 0 && inputYear < today) {
			props.setCitizenFormData((prevState) => ({
				...prevState,
				[name]: "",
			}));
			props.setTermDateError("End term date is not valid");
		} else {
			props.setTermDateError("");
		}
	};

	const handleResidentChange = (e) => {
		props.setCitizenFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
			["stayPeriod"]: "",
		}));
		props.setTermDateError("");
	};

	const handleUkZcodeChange = (e) => {
		props.setCitizenFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value.toUpperCase(),
		}));
	};

	return (
		<>
			<div>
				<form>
					<div class="mb-4">
						<label class="form-label input-label">
							Full Name <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="fullName"
							name="fullName"
							value={props.data.fullName}
							onChange={props.onChange}
							aria-describedby="fullNameHelp"
							placeholder="Full Name"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Date of Birth <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="date"
							class="form-control form-input mb-2"
							id="dob"
							name="dob"
							value={props.data.dob}
							onChange={handleDobChange}
							max={today}
							aria-describedby="dobHelp"
							placeholder="Date of Birth"
							required
						/>
						{props.dateError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{props.dateError}
							</div>
						)}
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							UK Phone Number <span style={{ color: "red" }}>*</span>
						</label>
						<InputMask
							type="text"
							class="form-control form-input mb-2"
							id="ukPhoneNumber"
							name="ukPhoneNumber"
							value={props.data.ukPhoneNumber}
							onChange={props.onChange}
							aria-describedby="ukPhoneNumberHelp"
							onBlur={handleTelUkBlur}
							placeholder="4412345671234"
							mask={"+9999999999999"}
							maskChar={null}
							formatChars={{
								9: "[0-9]",
							}}
							required
						/>
						{telUkError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{telUkError}
							</div>
						)}
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Indonesia Phone Number <span style={{ color: "red" }}>*</span>
						</label>
						<InputMask
							type="text"
							class="form-control form-input"
							id="indonesianPhoneNumber"
							name="indonesianPhoneNumber"
							value={props.data.indonesianPhoneNumber}
							onChange={props.onChange}
							aria-describedby="indonesianPhoneNumberHelp"
							onBlur={handleTelIdBlur}
							placeholder="6212345671234"
							mask={"+9999999999999"}
							maskChar={null}
							formatChars={{
								9: "[0-9]",
							}}
							required
						/>
						{telIdError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{telIdError}
							</div>
						)}
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Email <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="email"
							class="form-control form-input"
							id="email"
							name="email"
							value={props.data.email}
							onChange={props.onChange}
							aria-describedby="emailHelp"
							placeholder="Email"
							required
						/>
						<div id="emailHelp" class="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<hr class="divider-basic mb-4" />
					<div class="mb-4">
						<div>
							<label class="form-label input-label">
								Relationship Status <span style={{ color: "red" }}>*</span>
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="relationshipStatus"
								id="married"
								value="married"
								onChange={props.onChange}
								onClick={() => setOtherStatus(false)}
								checked={
									props.data.relationshipStatus === "married" &&
									otherStatus === false
								}
							/>
							<label class="form-check-label radio-relationship" for="married">
								Married
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="relationshipStatus"
								id="single"
								value="single"
								onChange={props.onChange}
								onClick={() => setOtherStatus(false)}
								checked={
									props.data.relationshipStatus === "single" &&
									otherStatus === false
								}
							/>
							<label class="form-check-label radio-relationship" for="single">
								Single
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input "
								type="radio"
								name="relationshipStatus"
								id="other"
								value="other"
								onClick={() => setOtherStatus(true)}
								// checked={
								// 	props.data.relationshipStatus !== "married" ||
								// 	props.data.relationshipStatus !== "single"
								// }
							/>
							<label class="form-check-label radio-relationship" for="other">
								Other:
							</label>
						</div>
						<div class="form-check-inline">
							<input
								style={{ display: otherStatus ? "" : "none" }}
								type="text"
								class="form-control relationship-other"
								id="otherRelationship"
								name="relationshipStatus"
								value={props.data.relationshipStatus}
								onChange={props.onChange}
								aria-describedby="otherRelationshipHelp"
								placeholder="Fill in.."
								// disabled
								// hidden
							/>
						</div>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Religion <span style={{ color: "red" }}>*</span>
						</label>
						<select
							class="form-select form-input"
							aria-label="Default select example"
							id="religion"
							name="religion"
							value={props.data.religion}
							onChange={props.onChange}
							required
						>
							<option value="" selected disabled hidden>
								Open this select menu
							</option>
							<option value="islam">Islam</option>
							<option value="kristen">Kristen</option>
							<option value="hindu">Hindu</option>
							<option value="hindu">Buddha</option>
							<option value="pnts">Prefer not to say</option>
						</select>
					</div>
					<hr class="divider-basic mb-4" />
					<div class="mb-4">
						<label class="form-label input-label">Indonesian Address</label>
						<input
							type="text"
							class="form-control form-input"
							id="indonesianAddress"
							name="indonesianAddress"
							value={props.data.indonesianAddress}
							onChange={props.onChange}
							aria-describedby="indonesianAddressHelp"
							placeholder="Indonesian Adress"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">Province</label>
						<Select
							type="text"
							className="form-control form-input"
							id="province"
							name="province"
							value={selectedProvince}
							// onChange={props.onChange}
							onChange={handleProvinceChange}
							aria-describedby="provinceHelp"
							placeholder="Province"
							options={provinceList}
							isSearchable
							required
						/>
						{/* <input
							type="text"
							class="form-control form-input"
							id="province"
							name="province"
							value={props.data.province}
							onChange={props.onChange}
							aria-describedby="provinceHelp"
							placeholder="Province"
							required
						/> */}
					</div>
					<div class="mb-4">
						<label class="form-label input-label">City/Regency</label>
						<input
							type="text"
							class="form-control form-input"
							id="city"
							name="city"
							value={props.data.city}
							onChange={props.onChange}
							aria-describedby="cityHelp"
							placeholder="City/Regency"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">District</label>
						<input
							type="text"
							class="form-control form-input"
							id="district"
							name="district"
							value={props.data.district}
							onChange={props.onChange}
							aria-describedby="districtHelp"
							placeholder="District"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">Indonesian Zip Code</label>
						<PatternFormat
							type="text"
							class="form-control form-input"
							id="idnZCode"
							name="idnZCode"
							value={props.data.idnZCode}
							onChange={props.onChange}
							format="#####"
							aria-describedby="idnZCodeHelp"
							placeholder="Zip Code"
							required
						/>
					</div>
					<hr class="divider-basic mb-4" />
					<div class="mb-4">
						<label class="form-label input-label">UK Address</label>
						<input
							type="text"
							class="form-control form-input"
							id="ukAddress"
							name="ukAddress"
							value={props.data.ukAddress}
							onChange={props.onChange}
							aria-describedby="ukAddressHelp"
							placeholder="UK Address"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">UK Zip Code</label>
						<InputMask
							type="text"
							class="form-control form-input"
							id="ukZCode"
							name="ukZCode"
							value={props.data.ukZCode}
							onChange={handleUkZcodeChange}
							aria-describedby="ukZCodeHelp"
							mask="*** ***"
							maskChar={null}
							formatChars={{
								"*": "[A-Za-z0-9]",
							}}
							alwaysShowMask={false}
							placeholder="A12 3CD"
							required
						/>
					</div>
					<div
						class="mb-4"
						style={{ display: props.data.ukAddress === "" ? "none" : "" }}
					>
						<div>
							<label class="form-label input-label">
								Address Status <span style={{ color: "red" }}>*</span>
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="permanentResident"
								id="permanentResident_true"
								value={true}
								onChange={handleResidentChange}
								onClick={() => setPermanentResident(true)}
							/>
							<label class="form-check-label radio-relationship" for="married">
								Permanent Residential
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input "
								type="radio"
								name="permanentResident"
								id="permanentResident_false"
								value={false}
								onChange={props.onChange}
								onClick={() => setPermanentResident(false)}
							/>
							<label class="form-check-label radio-relationship" for="other">
								End Term Date:
							</label>
						</div>
						<div class="form-check-inline">
							<input
								style={{
									display: permanentResident === false ? "" : "none",
								}}
								type="date"
								className="form-control mb-2"
								id="stayPeriod"
								name="stayPeriod"
								value={props.data.stayPeriod}
								onChange={props.onChange}
								onBlur={stayPeriodBlur}
								min={today}
								aria-describedby="stayPeriodHelp"
								placeholder="Fill in.."
								// disabled
								// hidden
							/>
						</div>
						{props.termDateError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{props.termDateError}
							</div>
						)}
					</div>
					<hr class="divider-basic mb-4" />
					<div class="mb-4">
						<label class="form-label input-label">Occupation</label>
						<input
							type="text"
							class="form-control form-input"
							id="occupation"
							name="occupation"
							value={props.data.occupation}
							onChange={props.onChange}
							aria-describedby="occupationHelp"
							placeholder="Occupation"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Company (Previous/Current)
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="company"
							name="company"
							value={props.data.company}
							onChange={props.onChange}
							aria-describedby="companyHelp"
							placeholder="Company"
							required
						/>
					</div>
					{/* <button type="submit" class="btn btn-primary">
							Submit
						</button> */}
				</form>
			</div>
		</>
	);
}

export default AlumniBasicInfo;
