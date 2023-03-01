import React from "react";

function FamilyDetail(props) {
	const today = new Date().toISOString().substring(0, 10);

	return (
		<>
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
			<hr class="divider-basic mb-4" />
		</>
	);
}

export default FamilyDetail;
