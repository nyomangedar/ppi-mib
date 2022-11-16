import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { useNewPostMutation } from "../../features/posts/postsApiSlice";

const AdminMenuPost = () => {
	const navigate = useNavigate();

	const [addNewPost, { isLoading, isSuccess, isError, error }] =
		useNewPostMutation();

	const [sendLogout, { isSuccess: logOutSuccess }] = useSendLogoutMutation();

	const [user, setUser] = useState("635455214a4f413239a247e4");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [active, setActive] = useState("");
	const [image, setImage] = useState("");
	const [imageW, setImageW] = useState("");
	const [imageM, setImageM] = useState("");

	useEffect(() => {
		if (isSuccess) {
			setTitle("");
			setDescription("");
			setLink("");
			setActive("");
			setImage(null);
			setImageM(null);
			setImageW(null);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (logOutSuccess) {
			navigate("/login");
		}
	}, [logOutSuccess, navigate]);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onDescriptionChanged = (e) => setDescription(e.target.value);
	const onLinkChanged = (e) => setLink(e.target.value);
	const onActiveChanged = (e) => setActive(e.target.value);
	const onImageChanged = (e) => setImage(e.target.value);
	const onImageWChanged = (e) => setImageW(e.target.value);
	const onImageMChanged = (e) => setImageM(e.target.value);

	const onSavePostClicked = async (e) => {
		e.preventDefault();
		console.log({ user, title, link, active });
		await addNewPost(user, title, link, active, image, imageM, imageW);
	};

	const errClass = isError ? "errmsg" : "offscreen";

	return (
		<>
			<div class="p-5">
				<h1>Create a Post </h1>
				<form className="row" onSubmit={onSavePostClicked}>
					<div className="col-md-12">
						<label className="form-label">Title</label>
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							value={title}
							onChange={onTitleChanged}
						/>
					</div>
					<div className="col-md-12">
						<label className="form-label">Description</label>
						<textarea
							class="form-control"
							id="description"
							name="desctiption"
							value={description}
							onChange={onDescriptionChanged}
						/>
					</div>
					<div className="col-md-12">
						<label className="form-label">Link</label>
						<input
							class="form-control"
							type="text"
							id="link"
							name="link"
							value={link}
							onChange={onLinkChanged}
						/>
					</div>
					<div className="col-md-12">
						<input
							type="checkbox"
							id="activate"
							name="activate"
							value={true}
							onChange={onActiveChanged}
						/>
						<label className="form-check-label">Activate</label>
					</div>
					<div className="col-md-12">
						<label className="form-label">Image large: </label>
						<input
							type="file"
							class="form-control-file"
							id="image"
							name="image"
							value={image}
							onChange={onImageChanged}
						/>
					</div>
					<div className="col-md-12">
						<label className="form-label">Image wide: </label>
						<input
							type="file"
							class="form-control-file"
							id="imageW"
							name="imageW"
							value={imageW}
							onChange={onImageWChanged}
						/>
					</div>
					<div className="col-md-12">
						<label className="form-label">Image mobile:</label>
						<input
							type="file"
							class="form-control-file"
							id="imageM"
							name="imageM"
							value={imageM}
							onChange={onImageMChanged}
						/>
					</div>
					<div className="col-md-12">
						<button type="submit">Submit</button>
					</div>
				</form>
				<button type="button" class="btn btn-primary" onClick={sendLogout}>
					Logout
				</button>
			</div>
		</>
	);
};
export default AdminMenuPost;
