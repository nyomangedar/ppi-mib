import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import plus from "../../../image/formAsset/plus-button.svg";

function StudentEdu(props) {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const currentYear = new Date().getFullYear();
	const [otherStatus, setOtherStatus] = useState(false);

	function handleBlur(event) {
		const inputYear = event.target.value;
		if (
			inputYear.length > 0 &&
			(inputYear.length !== 4 || parseInt(inputYear) > new Date().getFullYear())
		) {
			alert("Please enter a valid year");
		}
	}

	function handleBlurGrad(event) {
		const inputYear = event.target.value;
		if (inputYear.length > 0 && inputYear.length !== 4) {
			alert("Please enter a valid year");
		}
	}

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
							onChange={(event) => props.onChange(props.index, event)}
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
							onChange={(event) => props.onChange(props.index, event)}
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
								onChange={(event) => props.onChange(props.index, event)}
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
							onChange={(event) => props.onChange(props.index, event)}
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
							onChange={(event) => props.onChange(props.index, event)}
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
						<input
							type="number"
							class="form-control form-input"
							min="1000"
							max={currentYear}
							onBlur={handleBlur}
							id="entryYear"
							name="entryYear"
							value={props.data.entryYear}
							onChange={(event) => props.onChange(props.index, event)}
							aria-describedby="entryYearHelp"
							placeholder="Entry Year"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Graduate Year <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="number"
							class="form-control form-input"
							min="1000"
							// max={currentYear}
							onBlur={handleBlurGrad}
							id="graduateYear"
							name="graduateYear"
							value={props.data.graduateYear}
							onChange={(event) => props.onChange(props.index, event)}
							aria-describedby="graduateYearHelp"
							placeholder="Graduate Year"
							required
						/>
					</div>
					<div class="mb-4">
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
					</div>
					<div
						class="button-col me-0 mb-4"
						style={{ display: props.index > 0 ? "" : "none" }}
					>
						<Button
							className="remove-family d-flex align-items-center"
							onClick={() => {
								props.removeEducation(props.index);
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
