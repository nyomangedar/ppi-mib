import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";
import usePersist from "../features/hooks/usePersist";

function LoginAdmin() {
	const userRef = useRef();
	const errRef = useRef();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [divisi, setDivisi] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [persist, setPersist] = usePersist();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrorMessage("");
	}, [username, password, divisi]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(username, divisi);
			const { accessToken } = await login({
				username,
				password,
				divisi,
			}).unwrap();
			dispatch(setCredentials({ accessToken }));
			setUsername("");
			setPassword("");
			navigate("/admin");
		} catch (err) {
			if (!err.status) {
				setErrorMessage("No Server Response");
			} else if (err.status === 400) {
				setErrorMessage("Missing Username or Password");
			} else if (err.status === 401) {
				setErrorMessage("Unauthorized");
			} else {
				setErrorMessage(err.data?.message);
			}
			errRef.current.focus();
		}
	};

	const handleUserInput = (e) => setUsername(e.target.value);
	const handlePwdInput = (e) => setPassword(e.target.value);
	const handleDivisiInput = (e) => setDivisi(e.target.value);
	const handleToggle = () => setPersist((prev) => !prev);

	const errClass = errorMessage ? "errorMessage" : "offscreen";

	if (isLoading) return <p>Loading...</p>;

	const content = (
		<>
			<div class="p-5">
				<h1>Admin Login</h1>
				<main>
					<p ref={errRef} class={errClass} aria-live="assertive">
						{errorMessage}
					</p>
					<form class="mb-4" onSubmit={handleSubmit}>
						<div class="mb-4">
							<label htmlFor="username" class="form-label">
								Username
							</label>
							<input
								type="text"
								class="form-control"
								id="username"
								ref={userRef}
								value={username}
								onChange={handleUserInput}
								autoComplete="off"
								required
							></input>
						</div>
						<div class="mb-4">
							<label htmlFor="password" class="form-label">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="password"
								value={password}
								onChange={handlePwdInput}
								required
							></input>
						</div>
						{/* <div class="mb-4">
							<label htmlFor="password" class="form-label">
								Divisi
							</label>
							<input
								type="text"
								class="form-control"
								id="divisi"
								value={divisi}
								onChange={handleDivisiInput}
								required
							></input>
						</div> */}
						<div>
							<label htmlFor="persist" class="form-check-label"></label>
							<input
								type="checkbox"
								class="form-check-input"
								id="persist"
								onChange={handleToggle}
								checked={persist}
							/>
							Trust This Device
						</div>
						<div>
							<button type="submit" class="btn btn-primary">
								Login
							</button>
						</div>
					</form>
				</main>
				<footer>
					<Link to="/">Back to Homepage</Link>
				</footer>
			</div>
		</>
	);

	return content;
}

export default LoginAdmin;
