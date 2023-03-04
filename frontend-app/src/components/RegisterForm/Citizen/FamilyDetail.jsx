import React from "react";
import { Button } from "react-bootstrap";
import plus from "../../../image/formAsset/plus-button.svg";

function FamilyDetail(props) {
	const today = new Date().toISOString().substring(0, 10);

	return (
		<>
			<h3 className="mb-3 fw-bold" style={{ fontWeight: "500" }}>
				Family Member {props.index + 1}
			</h3>
			<div class="mb-4">
				<label class="form-label input-label">
					Full Name <span style={{ color: "red" }}>*</span>
				</label>
				<input
					type="text"
					class="form-control form-input"
					id="fullname"
					name="fullname"
					value={props.data.fullname}
					onChange={(event) => props.onChange(props.index, event)}
					aria-describedby="nameHelp"
					placeholder="Full Name"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="form-label input-label">
					Relationship <span style={{ color: "red" }}>*</span>
				</label>
				<input
					type="text"
					class="form-control form-input"
					id="relationship"
					name="relationship"
					value={props.data.relationship}
					onChange={(event) => props.onChange(props.index, event)}
					aria-describedby="relationshipHelp"
					placeholder="Relationship"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="form-label input-label">
					Date of Birth <span style={{ color: "red" }}>*</span>
				</label>
				<input
					type="date"
					class="form-control form-input"
					id="dob"
					name="dob"
					value={props.data.dob}
					onChange={(event) => props.onChange(props.index, event)}
					aria-describedby="dobHelp"
					placeholder="Date of Birth"
					required
				/>
			</div>
			<div class="button-col me-0 mb-4">
				<Button
					className="remove-family d-flex align-items-center"
					onClick={() => {
						props.removeFamily(props.index);
						// props.setFamilyCount(props.familyCount + 1);
					}}
				>
					<img src={plus} className="me-2" style={{ rotate: "45deg" }} />
					<span class="text-center fs-4">Remove</span>
				</Button>
			</div>
			<hr class="divider-basic mb-4" />
		</>
	);
}

export default FamilyDetail;
