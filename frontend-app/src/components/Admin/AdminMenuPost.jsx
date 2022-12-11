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
	const [active, setActive] = useState(true);
	const [image, setImage] = useState(null);
	const [image_wide, setimage_wide] = useState(null);
	const [image_mobile, setimage_mobile] = useState(null);

	useEffect(() => {
		if (isSuccess) {
			setTitle("");
			setDescription("");
			setLink("");
			setActive("");
			setImage(null);
			setimage_mobile(null);
			setimage_wide(null);
		}
	}, [isSuccess]);

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onDescriptionChanged = (e) => setDescription(e.target.value);
	const onLinkChanged = (e) => setLink(e.target.value);
	const onActiveChanged = (e) => setActive(e.target.value);
	const onImageChanged = (e) => setImage(e.target.files[0]);
	const onimage_wideChanged = (e) => setimage_wide(e.target.files[0]);
	const onimage_mobileChanged = (e) => setimage_mobile(e.target.files[0]);

	var formData = new FormData();
	const onSavePostClicked = async (e) => {
		e.preventDefault();
		formData.append("user", user);
		formData.append("title", title);
		formData.append("text", description);
		formData.append("link", link);
		formData.append("activeStatus", active);
		formData.append("image", image);
		formData.append("image_mobile", image_mobile);
		formData.append("image_wide", image_wide);
		await addNewPost(formData);
	};

	useEffect(() => {
		if (logOutSuccess) {
			navigate("/login");
		}
	}, [logOutSuccess, navigate]);

	const errClass = isError ? "errmsg" : "offscreen";

	return (
		<>
			<p className={errClass}>{error?.data?.message}</p>
			<div class="mb-5">
				<div class="d-flex justify-content-between">
					<h1>Create a Post </h1>
					<button type="button" class="btn btn-primary" onClick={sendLogout}>
						Logout
					</button>
				</div>
				<form className="row mb-5" onSubmit={onSavePostClicked}>
					<div className="col-md-12 mb-3">
						<label className=" fs-4 form-label">Title</label>
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							value={title}
							onChange={onTitleChanged}
						/>
					</div>
					<div className="col-md-12 mb-3">
						<label className=" fs-4 form-label">Description</label>
						<textarea
							class="form-control"
							id="description"
							name="desctiption"
							value={description}
							onChange={onDescriptionChanged}
						/>
					</div>
					<div className="col-md-12 mb-3">
						<label className=" fs-4 form-label">Link</label>
						<input
							class="form-control"
							type="text"
							id="link"
							name="link"
							value={link}
							onChange={onLinkChanged}
						/>
					</div>
					<div className="col-md-12 mb-3">
						<input
							class="form-check-input me-2"
							type="checkbox"
							id="activate"
							name="activate"
							value={true}
							onChange={onActiveChanged}
							style={{ width: "25px", height: "25px" }}
						/>
						<label className="form-check-label  fs-4">Activate</label>
					</div>
					<div className="col-md-12 mb-3">
						<label className="form-label me-2  fs-4">Image: </label>
						<input
							type="file"
							class="form-control-file"
							id="image"
							name="image"
							// value={image}
							onChange={onImageChanged}
						/>
					</div>
					<div className="col-md-12 mb-3">
						<label className="form-label me-2  fs-4">Image wide: </label>
						<input
							type="file"
							class="form-control-file"
							id="image_wide"
							name="image_wide"
							// value={image_wide}
							onChange={onimage_wideChanged}
						/>
					</div>
					<div className="col-md-12 mb-3">
						<label className="form-label me-2  fs-4">Image mobile:</label>
						<input
							type="file"
							class="form-control-file"
							id="image_mobile"
							name="image_mobile"
							// value={image_mobile}
							onChange={onimage_mobileChanged}
						/>
					</div>
					<div className="col-md-12">
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default AdminMenuPost;
