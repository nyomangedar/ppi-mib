import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CarouselBody from "../components/Homepage/CarouselBody";
import PPIHeader from "../components/PPIHeader";

const Homepage = () => {
	return (
		<>
			<CarouselBody />
		</>
	);
};

export default Homepage;
