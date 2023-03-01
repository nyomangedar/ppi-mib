import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "react-bootstrap";
import arrow from "../../image/formAsset/arrow-back.svg";

function ContactUK(props) {
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
							id="ukEmergencyName"
							name="ukEmergencyName"
							value={props.data.ukEmergencyName}
							onChange={props.onChange}
							aria-describedby="ukEmergencyNameHelp"
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
							id="ukEmergencyPhone"
							name="ukEmergencyPhone"
							value={props.data.ukEmergencyPhone}
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
							id="ukEmergencyRelationship"
							name="ukEmergencyRelationship"
							value={props.data.ukEmergencyRelationship}
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

export default ContactUK;
