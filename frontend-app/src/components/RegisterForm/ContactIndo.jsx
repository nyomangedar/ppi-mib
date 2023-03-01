import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";
import arrow from "../../image/formAsset/arrow-back.svg";

function ContactIndo(props) {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	function handleBlur(event) {
		const inputPhone = event.target.value;
		if (inputPhone.length > 13) {
			alert("Please enter a valid year");
		}
	}

	return (
		<>
			<div>
				<form>
					<div class="mb-4">
						<label class="form-label input-label">
							Name <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="text"
							class="form-control form-input"
							id="idnEmergencyName"
							name="idnEmergencyName"
							value={props.data.idnEmergencyName}
							onChange={props.onChange}
							aria-describedby="idnEmergencyNameHelp"
							placeholder="Full Name"
							required
						/>
					</div>
					<div class="mb-4">
						<label class="form-label input-label">
							Phone Number <span style={{ color: "red" }}>*</span>
						</label>
						<input
							type="tel"
							className="form-control form-input"
							pattern="[0-9]*"
							inputMode="numeric"
							placeholder="Enter phone number"
							minLength="10"
							maxLength="12"
							id="idnEmergencyPhone"
							name="idnEmergencyPhone"
							value={props.data.idnEmergencyPhone}
							onChange={props.onChange}
							onBlur={handleBlur}
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
							id="idnEmergencyRelationship"
							name="idnEmergencyRelationship"
							value={props.data.idnEmergencyRelationship}
							onChange={props.onChange}
							placeholder="Relationship"
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

export default ContactIndo;
