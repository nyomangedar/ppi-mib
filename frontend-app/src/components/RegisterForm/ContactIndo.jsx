import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InputMask from "react-input-mask";

function ContactIndo(props) {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});
	const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const [telError, setTelError] = useState("");

	function handleBlur(event) {
		const { name, value } = event.target;
		let inputPhone = value;
		if (inputPhone.length < 10) {
			props.setCitizenFormData((prevState) => ({
				...prevState,
				[name]: "",
			}));
			setTelError("Please enter a valid phone number");
		} else {
			setTelError("");
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
						<InputMask
							type="tel"
							className="form-control form-input"
							id="idnEmergencyPhone"
							name="idnEmergencyPhone"
							value={props.data.idnEmergencyPhone}
							onChange={props.onChange}
							onBlur={handleBlur}
							placeholder="6212345671234"
							mask={"+9999999999999"}
							maskChar={null}
							formatChars={{
								9: "[0-9]",
							}}
							required
						/>
						{telError !== "" && (
							<div className="error fw-bold" style={{ color: "red" }}>
								{telError}
							</div>
						)}
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
