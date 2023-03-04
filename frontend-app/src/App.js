import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PPIHeader from "./components/PPIHeader";
import Footer from "./components/Footer";
import "./index.css";
import AdminMenu from "./pages/AdminMenu";
import RequireAuth from "./features/auth/RequireAuth";
import LoginAdmin from "./pages/LoginAdmin";
import PersistLogin from "./features/auth/PersistLogin";
import StudentForm from "./pages/StudentForm";
<<<<<<< HEAD
import AlumniForm from "./pages/AlumniForm";
import CitizenForm from "./pages/CitizenForm";

function App() {
	return (
		<>
			<PPIHeader />
			<Routes>
				<Route path="/" element={<Layout />} />
				{/* Public Routes */}
				<Route index element={<Homepage />} />
				<Route path="login" element={<LoginAdmin />} />
				<Route path="register" element={<CitizenForm />} />
				{/* Admin Routes */}
				<Route element={<PersistLogin />}>
					<Route element={<RequireAuth />}>
						<Route path="admin" element={<AdminMenu />} />
					</Route>
				</Route>
			</Routes>
			<Footer />
		</>
	);
=======
import FormLandingPage from "./pages/FormLandingPage";

function App() {
    return (
        <>
            <PPIHeader />
            <Routes>
                <Route path="/" element={<Layout />} />
                {/* Public Routes */}
                <Route index element={<Homepage />} />
                <Route path="login" element={<LoginAdmin />} />
                <Route path="register" element={<FormLandingPage />} />
                <Route path="register/student" element={<StudentForm />} />
                {/* Admin Routes */}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth />}>
                        <Route path="admin" element={<AdminMenu />} />
                    </Route>
                </Route>
            </Routes>
            <Footer />
        </>
    );
>>>>>>> 8b28474b3168f8004206ee175615c4160c05b6e2
}

export default App;
