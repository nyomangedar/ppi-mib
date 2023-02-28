import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";
import arrow from "../../image/formAsset/arrow-back.svg";

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
							required
						>
							<option selected disabled hidden>
								Open this select menu
							</option>
							<option value="islam">Bachelor</option>
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
							required
						>
							<option selected disabled hidden>
								Open this select menu
							</option>
							<option value="uob">University of Birmingham</option>
							<option value="aston">Aston University</option>
							<option value="bcu">Birmingham City University</option>
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
							required
						>
							<option selected disabled hidden>
								Open this select menu
							</option>
							<option value="uob">Self-funded</option>
							<option value="aston">Scholarship</option>
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
							onBlur={handleBlur}
							id="graduateYear"
							name="graduateYear"
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
