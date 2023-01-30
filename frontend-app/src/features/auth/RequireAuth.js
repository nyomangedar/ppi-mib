import useAuth from "../hooks/useAuth";
const { useLocation, Navigate, Outlet } = require("react-router-dom");

const RequireAuth = () => {
	const location = useLocation();
	const { username, active } = useAuth();

	console.log(username, active);

	return username && active ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default RequireAuth;
