import React, { useState } from "react";
import { Button } from "react-bootstrap";
import plus from "../../../image/formAsset/plus-button.svg";
import StudentEdu from "./StudentEdu";
// import { useMediaQuery } from "react-responsive";

function Education(props) {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: "(min-width: 1224px)",
	// });
	// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	// const [familyStatus, setFamilyStatus] = useState(false);
	// const [familyCount, setFamilyCount] = useState(0);

	return (
		<>
			<div>
				<form>
					<div>
						{/* <FamilyDetail /> */}
						{props.data.education.map((item, i) => (
							<StudentEdu
								data={item}
								onChange={props.onChange}
								removeEducation={props.removeEducation}
								index={i}
							/>
						))}
						<div class="button-col me-0">
							<Button
								className="add-family d-flex align-items-center px-4 ms-auto"
								onClick={() => {
									props.addEducation();
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

export default Education;
