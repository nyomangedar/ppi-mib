import React from "react";
import AdminMenuPost from "../components/Admin/AdminMenuPost";
import CarouselCard from "../components/Admin/CarouselCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useGetPostsQuery } from "../features/posts/postsApiSlice";

const AdminMenu = () => {
	const {
		data: posts,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetPostsQuery();

	if (isSuccess) {
		const { ids, entities } = posts;
		const postList = ids?.length
			? ids.map((postId) => (
					<Col>
						<CarouselCard post={entities[postId]} />
					</Col>
			  ))
			: null;

		return (
			<>
				<div class="p-5">
					<AdminMenuPost />
					<Container fluid="sm">
						<Row>{postList}</Row>
					</Container>
					{/* <div class="flex row">{postList}</div> */}
				</div>
			</>
		);
	}
};

export default AdminMenu;
