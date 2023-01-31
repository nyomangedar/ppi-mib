import React, { useEffect } from "react";
import logo_ppi from "../image/logo_ppi.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";

const PPIHeader = () => {
    const currentLocation = window.location.href.split("/");
    useEffect(() => {
        const test =
            currentLocation[currentLocation.length - 1] === "" ? "#home" : "/";
        console.log(test);
    }, []);

    return (
        <>
            <Navbar bg="light" sticky="top">
                <NavbarBrand className="ps-5" href="/">
                    <img
                        src={logo_ppi}
                        // src={`${serverBaseURI}/logo_ppi.png`}
                        class="mx-auto d-block img-fluid"
                        alt="logo-ppi"
                    ></img>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                    <Nav id="navbar-links">
                        <Nav.Link
                            href={
                                currentLocation[currentLocation.length - 1] ===
                                ""
                                    ? "#home"
                                    : "/"
                            }
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link href="#aboutUs">About Us</Nav.Link>
                        <Nav.Link href="https://bit.ly/MIBRegistration">
                            Registration
                        </Nav.Link>
                        {/* <Nav.Link>Article</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default PPIHeader;
