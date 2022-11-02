import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../features/posts/postsApiSlice";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import student_adv from "../../image/student_adv.png";

const PostCarousel = ({ postId }) => {
	const post = useSelector((state) => selectPostById(state, postId));

	// const navigate = useNavigate();

	if (post) {
		// console.log({ post });
		return (
			<Carousel.Item>
				<img
					src={student_adv}
					class="d-block w-100 center"
					alt="StudentAdvisory"
				></img>
				<Carousel.Caption>
					<div class="d-flex justify-content-end">
						<div class="gradient-card align-middle">
							<div className="gradient">
								<div className="info ms-auto">
									<div className="title text-center">{post.title}</div>
									<div className="text">{post.text}</div>
								</div>
							</div>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		);
		{
			/* <Carousel.Item>
					<img
						src="https://plus.unsplash.com/premium_photo-1661401876269-925735d116dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
						class="d-block w-100 center"
						alt="mount fuji"
					></img>
					<Carousel.Caption>
						<div class="gradient-card align-middle">
							<div className="gradient">
								<div className="info ms-auto">
									<div className="title text-center">{post.title}</div>
									<div className="text">{post.text}</div>
								</div>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<div class="d-flex justify-content-center">
						<img
							src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
							class="d-block w-100 center"
							alt="mount fuji"
						></img>
					</div>
					<Carousel.Caption>
						<div class="gradient-card vertical-center">
							<div className="gradient">
								<div className="info">
									<div className="title text-center">{post.title}</div>
									<div className="text">{post.text}</div>
								</div>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item> */
		}
	} else return null;
};

export default PostCarousel;
