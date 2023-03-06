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
import FormLandingPage from "./pages/FormLandingPage";
import CitizenForm from "./pages/CitizenForm";
import AlumniForm from "./pages/AlumniForm";

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
                <Route path="register/citizen" element={<CitizenForm />} />
                <Route path="register/student" element={<StudentForm />} />
                <Route path="register/alumni" element={<AlumniForm />} />
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
}

export default App;
