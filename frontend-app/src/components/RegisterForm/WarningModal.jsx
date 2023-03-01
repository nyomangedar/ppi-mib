import React from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "react-bootstrap";

function WarningModal({ show, toggle, unfilledFields }) {
	return (
		<Modal show={show} toggle={toggle}>
			<ModalHeader toggle={toggle}>Warning</ModalHeader>
			<ModalBody>
				<p>The following fields are unfilled:</p>
				<ul>
					{unfilledFields.map((field) => (
						<li key={field}>{field}</li>
					))}
				</ul>
			</ModalBody>
			<ModalFooter>
				<Button color="secondary" onClick={toggle}>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default WarningModal;
