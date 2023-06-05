import React, { useState } from "react";
import FamilyDetail from "./FamilyDetail";
import { Button } from "react-bootstrap";
import plus from "../../../image/formAsset/plus-button.svg";
// import { useMediaQuery } from "react-responsive";

function Family(props) {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: "(min-width: 1224px)",
	// });
	// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	// const [familyStatus, setFamilyStatus] = useState(false);
	// const [familyCount, setFamilyCount] = useState(0);

	const handleAddFamilyMember = () => {
		props.setCitizenFormData((prevState) => ({
			...prevState,
			families: [
				...prevState.families,
				{
					fullname: "",
					relationship: "",
					dob: "",
					dependant: "",
					nationality: "",
				},
			],
		}));
		console.log(props.data);
	};

	return (
		<>
			<div>
				<form>
					<div class="mb-4">
						<div>
							<label class="form-label input-label">
								Do you have any family in the UK?{" "}
								<span style={{ color: "red" }}>*</span>
							</label>
						</div>
						<div class="form-check form-check-inline me-5">
							<input
								class="form-check-input"
								type="radio"
								name="familyStatus"
								id="familyStatus"
								value={props.familyStatus}
								onClick={() => {
									props.setFamilyStatus(true);
									if (props.data.families.length === 0) {
										handleAddFamilyMember();
										// props.setFamilyCount(1);
									}
								}}
								checked={props.familyStatus}
							/>
							<label class="form-check-label radio-relationship" for="yes">
								Yes
							</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="familyStatus"
								id="familyStatus"
								value={props.familyStatus}
								onClick={() => props.setFamilyStatus(false)}
								checked={props.familyStatus === false}
								// checked={props.data.families.length > 0 || props.familyStatus === false}
							/>
							<label class="form-check-label radio-relationship" for="single">
								No
							</label>
						</div>
					</div>
					<div style={{ display: props.familyStatus ? "" : "none" }}>
						{/* <FamilyDetail /> */}
						{props.data.families.map((familyMember, i) => (
							<FamilyDetail
								data={familyMember}
								setCitizenFormData={props.setCitizenFormData}
								dateError={props.dateError}
								setDateError={props.setDateError}
								familyStatus={props.familyStatus}
								setFamilyStatus={props.setFamilyStatus}
								index={i}
							/>
						))}
						<div class="button-col me-0">
							<Button
								className="add-family d-flex align-items-center px-4 ms-auto"
								onClick={() => {
									handleAddFamilyMember();
									// props.setFamilyCount(props.familyCount + 1);
								}}
							>
								<img src={plus} className="me-2" />
								<span class="text-center fs-4">Add Another</span>
							</Button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default Family;
