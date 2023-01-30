import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CarouselBody from "../components/Homepage/CarouselBody";
import PPIHeader from "../components/PPIHeader";
import OrgStructure from "../components/Homepage/OrgStructure";

const Homepage = () => {
    return (
        <>
            <CarouselBody />
            <OrgStructure />
        </>
    );
};

export default Homepage;
