import { useSelector } from "react-redux";
import { selectCurrentToken } from "../auth/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
	const token = useSelector(selectCurrentToken);

	if (token) {
		const decoded = jwtDecode(token);
		const { username, active } = decoded;

		return { username, active };
	}

	return { username: "", active: false };
};

export default useAuth;
