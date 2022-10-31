import { Outlet } from "react-router-dom";
import React from "react";
import PPIHeader from "./PPIHeader";
import Footer from "./Footer";

const Layout = () => {
	return (
		<>
			<PPIHeader />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
