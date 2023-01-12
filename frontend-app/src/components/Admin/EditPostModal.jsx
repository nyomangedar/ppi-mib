import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
	useDeletePostMutation,
	useUpdatePostMutation,
} from "../../features/posts/postsApiSlice";
import { useState } from "react";

function EditPostModal(props) {
	const [updatePost, { isLoading, isSuccess, isError, error }] =
		useUpdatePostMutation();

	const [
		deletePost,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delError },
	] = useDeletePostMutation();

	const [imageUpdateStatus, setImageUpdateStatus] = useState(false);

	const [user, setUser] = useState(props.post.user);
	const [id, setId] = useState(props.post._id);
	const [title, setTitle] = useState(props.post.title);
	const [description, setDescription] = useState(props.post.text);
	const [link, setLink] = useState(props.post.link);
	const [active, setActive] = useState(props.post.activeStatus);
	// const [image, setImage] = useState(props.post.image.filename);
	// const [image_wide, setimage_wide] = useState(props.post.image_wide.filename);
	// const [image_mobile, setimage_mobile] = useState(
	// 	props.post.image_mobile.filename
	// );
	const [image, setImage] = useState(null);
	const [image_wide, setimage_wide] = useState(null);
	const [image_mobile, setimage_mobile] = useState(null);

	const canSave =
		[title, description, link, active].every(Boolean) && !isLoading;

	const onTitleChanged = (e) => setTitle(e.target.value);
	const onDescriptionChanged = (e) => setDescription(e.target.value);
	const onLinkChanged = (e) => setLink(e.target.value);
	const onActiveChanged = (e) => setActive(e.target.value);
	const onImageChanged = (e) => {
		setImageUpdateStatus(true);
		setImage(e.target.files[0]);
	};
	const onimage_wideChanged = (e) => {
		setImageUpdateStatus(true);
		setimage_wide(e.target.files[0]);
	};

	const onimage_mobileChanged = (e) => {
		setImageUpdateStatus(true);
		setimage_mobile(e.target.files[0]);
	};

	var formData = new FormData();
	const onSavePostClicked = async (e) => {
		e.preventDefault();
		if (canSave) {
			if (imageUpdateStatus) {
				console.log("masuk image update");
				formData.append("user", user);
				formData.append("id", id);
				formData.append("title", title);
				formData.append("text", description);
				formData.append("link", link);
				formData.append("activeStatus", active);
				formData.append("image", image);
				formData.append("image_mobile", image_mobile);
				formData.append("image_wide", image_wide);
				formData.append("imageUpdate", imageUpdateStatus);
				await updatePost(formData);
				props.onHide();
			} else {
				console.log("ga masuk image update");
				formData.append("user", user);
				formData.append("id", id);
				formData.append("title", title);
				formData.append("text", description);
				formData.append("link", link);
				formData.append("activeStatus", active);
				await updatePost(formData);
				props.onHide();
			}
		}
	};

	const onDeletePostClicked = async () => {
		await deletePost({ id: id });
		props.onHide();
	};

	const errClass = isError ? "errmsg" : "offscreen";

	const content = (
		<>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Edit Post
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className={errClass}>{error?.data?.message}</p>
					<div class="mb-5">
						<h1>Edit Post</h1>
						<form className="row mb-5" onSubmit={onSavePostClicked}>
							<div className="col-md-12 mb-2">
								<label className="form-label mb-3">Title</label>
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
								<label className="form-label">Description</label>
								<textarea
									class="form-control"
									id="description"
									name="desctiption"
									value={description}
									onChange={onDescriptionChanged}
								/>
							</div>
							<div className="col-md-12 mb-3">
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
							<div className="col-md-12 mb-3">
								<input
									class="form-check-input me-2"
									type="checkbox"
									id="activate"
									name="activate"
									value={active}
									onChange={onActiveChanged}
								/>
								<label className="form-check-label">Activate</label>
							</div>
							<div className="col-md-12 mb-3">
								<label className="form-label me-2">Image: </label>
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
								<label className="form-label me-2">Image wide: </label>
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
								<label className="form-label me-2">Image mobile:</label>
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
								<button
									type="submit"
									class="btn btn-outline-primary"
									// onClick={onSavePostClicked}
									disabled={!canSave}
								>
									Edit Post
								</button>
							</div>
						</form>
						<div className="col-md-12">
							<button
								// type="submit"
								class="btn btn-outline-primary btn-outline-danger"
								onClick={onDeletePostClicked}
								disabled={!canSave}
							>
								Delete Post
							</button>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={props.onHide}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);

	return content;
}

export default EditPostModal;
