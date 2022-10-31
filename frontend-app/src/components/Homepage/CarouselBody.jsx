import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PostCarousel from "./PostCarousel";
import { useGetPostsQuery } from "../../features/posts/postsApiSlice";

const CarouselBody = () => {
	const {
		data: posts,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetPostsQuery();

	let content;

	// if (isLoading) content = <PulseLoader color={"#FFF"}/>
	if (isLoading) content = <p>Loading...</p>;

	if (isError) {
		content = <p className="errmsg">{error?.data?.message}</p>;
	}

	if (isSuccess) {
		console.log({ posts });
		const { ids, entities } = posts;
		// console.log()
		// const post = useSelector((state) => selectPostById(state, postId));
		const postList = ids?.length
			? ids.map((postId) => (
					// <Carousel.Item>
					// 	<img
					// 		src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3778&q=80"
					// 		class="d-block w-100 center"
					// 		alt="mount fuji"
					// 	></img>
					// 	<Carousel.Caption>
					// 		<div class="container">
					// 			<div class="carousel-caption text-start">
					// 				<h1>{item.title}</h1>
					// 				<p>{item.text}</p>
					// 				<p>
					// 					<a class="btn btn-lg btn-primary" href="#">
					// 						Sign up today
					// 					</a>
					// 				</p>
					// 			</div>
					// 		</div>
					// 	</Carousel.Caption>
					// </Carousel.Item>
					<PostCarousel key={postId} postId={postId}></PostCarousel>
			  ))
			: null;

		content = <div>{postList}</div>;

		let contentTest = (
			<Carousel>
				{postList}
				<Carousel.Item>
					{/* <svg
				class="bd-placeholder-img"
				width="100%"
				height="100%"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				preserveAspectRatio="xMidYMid slice"
				focusable="false"
			>
				<rect width="100%" height="100%" fill="#777" />
			</svg> */}
					<img
						src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3778&q=80"
						class="d-block w-100 center"
						alt="mount fuji"
					></img>
					<Carousel.Caption>
						<div class="gradient-card">
							<div class="container">
								<div class="carousel-caption text-end">
									<h1>Example headline.</h1>
									<p>
										Some representative placeholder content for the first slide
										of the carousel.
									</p>
									<p>
										<a class="btn btn-lg btn-primary" href="#">
											Sign up today
										</a>
									</p>
								</div>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					{/* <svg
				class="bd-placeholder-img"
				width="100%"
				height="100%"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				preserveAspectRatio="xMidYMid slice"
				focusable="false"
			>
				<rect width="100%" height="100%" fill="#777" />
			</svg> */}
					<img
						src="https://plus.unsplash.com/premium_photo-1661401876269-925735d116dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
						class="d-block w-100 center"
						alt="mount fuji"
					></img>

					<Carousel.Caption>
						<div class="container">
							<div class="carousel-caption">
								<h1>Another example headline.</h1>
								<p>
									Some representative placeholder content for the second slide
									of the carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
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
						<div class="container">
							<div class="carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>
									Some representative placeholder content for the third slide of
									this carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
	return content;
};

export default CarouselBody;
