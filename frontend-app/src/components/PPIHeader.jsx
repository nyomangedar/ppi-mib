import React from "react";
import logo_ppi from "../image/logo_ppi.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

const PPIHeader = () => {
	return (
		<>
			<Navbar expand="lg">
				<NavbarBrand className="ps-4">
					<img
						src={logo_ppi}
						// src={`${serverBaseURI}/logo_ppi.png`}
						class="p-4 mx-auto d-block img-fluid"
						alt="logo-ppi"
					></img>
				</NavbarBrand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-center"
				>
					<Nav id="navbar-links">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#aboutUs">About Us</Nav.Link>
						<Nav.Link href="/register">Registration</Nav.Link>
						{/* <Nav.Link href="https://bit.ly/MIBRegistration">
                            Registration
                        </Nav.Link> */}
						{/* <Nav.Link>Article</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default PPIHeader;
