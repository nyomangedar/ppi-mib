import React from "react";

const AdminMenuPost = () => {
    return (
        <>
            <div>
                <h1>Create a Post </h1>
                <form className="row">
                    <div className="col-md-12">
                        <label className="form-label">Description</label>
                        <textarea class="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Image large: </label>
                        <input type="file" class="form-control-file" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Image medium: </label>
                        <input type="file" class="form-control-file" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Image small</label>
                        <input type="file" class="form-control-file" />
                    </div>
                </form>
            </div>
        </>
    );
};
export default AdminMenuPost;
