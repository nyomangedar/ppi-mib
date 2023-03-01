import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

function StudentEdu(props) {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const currentYear = new Date().getFullYear();

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
							onChange={props.onChange}
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
							class="form-select form-input"
							aria-label="Default select example"
							id="university"
							name="university"
							value={props.data.university}
							onChange={props.onChange}
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
						</select>
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
							onChange={props.onChange}
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
							onChange={props.onChange}
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
							onChange={props.onChange}
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
							onChange={props.onChange}
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

export default StudentEdu;
