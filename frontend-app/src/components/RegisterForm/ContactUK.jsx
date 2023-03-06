import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InputMask from "react-input-mask";

function ContactUK(props) {
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
						<InputMask
							type="text"
							className="form-control form-input mb-2"
							id="ukEmergencyPhone"
							name="ukEmergencyPhone"
							value={props.data.ukEmergencyPhone}
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
