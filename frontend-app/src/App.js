import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HompageContent from "./components/Homepage/HompageContent";
import PPIHeader from "./components/PPIHeader";
import Footer from "./components/Footer";
import "./index.css";

function App() {
	return (
		<>
			<PPIHeader />
			<Routes>
				<Route path="/" element={<Layout />} />
				{/* Public Routes */}
				<Route index element={<Homepage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
