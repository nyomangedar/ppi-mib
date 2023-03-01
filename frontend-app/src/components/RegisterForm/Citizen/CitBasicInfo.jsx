import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";

function CitBasicInfo(props) {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: "(min-width: 1224px)",
	// });
	// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const [otherStatus, setOtherStatus] = useState(false);
	const [permanentResident, setPermanentResident] = useState(false);

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
							UK Phone Number <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="tel"
							class="form-control form-input"
							id="ukPhoneNumber"
							name="ukPhoneNumber"
							value={props.data.ukPhoneNumber}
							onChange={props.onChange}
							aria-describedby="ukPhoneNumberHelp"
							placeholder="+44"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Indonesia Phone Number <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="tel"
							class="form-control form-input"
							id="indonesianPhoneNumber"
							name="indonesianPhoneNumber"
							value={props.data.indonesianPhoneNumber}
							onChange={props.onChange}
							aria-describedby="indonesianPhoneNumberHelp"
							placeholder="+62"
							required
						/>
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
						<label class="form-label input-label">
							Indonesian Address <span style={{ color: "red" }}>*</span>
						</label>
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
						<label class="form-label input-label">
							Province <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="province"
							name="province"
							value={props.data.province}
							onChange={props.onChange}
							aria-describedby="provinceHelp"
							placeholder="Province"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							City/Regency <span style={{ color: "red" }}>*</span>
						</label>
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
						<label class="form-label input-label">
							District <span style={{ color: "red" }}>*</span>
						</label>
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
						<label class="form-label input-label">
							Indonesian Zip Code <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="idnZCode"
							name="idnZCode"
							value={props.data.idnZCode}
							onChange={props.onChange}
							aria-describedby="idnZCodeHelp"
							placeholder="Zip Code"
							required
						/>
					</div>
					<hr class="divider-basic mb-4" />
					<div class="mb-4">
						<label class="form-label input-label">
							UK Address <span style={{ color: "red" }}>*</span>
						</label>
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
						<label class="form-label input-label">
							UK Zip Code <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="ukZCode"
							name="ukZCode"
							value={props.data.ukZCode}
							onChange={props.onChange}
							aria-describedby="ukZCodeHelp"
							placeholder="A12 3CD"
							required
						/>
					</div>
					<div class="mb-4">
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
								onChange={props.onChange}
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
								style={{ display: !permanentResident ? "" : "none" }}
								type="date"
								class="form-control relationship-other"
								id="stayPeriod"
								name="stayPeriod"
								value={props.data.stayPeriod}
								onChange={props.onChange}
								aria-describedby="stayPeriodHelp"
								placeholder="Fill in.."
								// disabled
								// hidden
							/>
						</div>
					</div>
					<hr class="divider-basic mb-4" />
					<div class="mb-4">
						<label class="form-label input-label">
							Occupation <span style={{ color: "red" }}>*</span>
						</label>
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
							Company (Previous/Current) <span style={{ color: "red" }}>*</span>
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

export default CitBasicInfo;
