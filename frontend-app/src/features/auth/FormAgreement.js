import Cookies from "js-cookie";
const { Navigate, Outlet } = require("react-router-dom");

const FormAgreement = () => {
    const formAgreement = Cookies.get("formAgreement");

    return formAgreement === "true" ? <Outlet /> : <Navigate to="/register" />;
};
export default FormAgreement;
