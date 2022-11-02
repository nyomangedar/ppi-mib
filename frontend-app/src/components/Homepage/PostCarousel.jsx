import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../../features/posts/postsApiSlice";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import student_adv from "../../image/student_adv.png";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const PostCarousel = ({ postId }) => {
    const [descShow, descSetter] = useState(false);
    const [descPop, descPopSetter] = useState(false);
    const [descPopStyle, setDescPopStyle] = useState();
    const post = useSelector((state) => selectPostById(state, postId));

    // const navigate = useNavigate();

    if (post) {
        // console.log({ post });
        return (
            <Carousel interval={null}>
                <Carousel.Item>
                    {/* <div class="row">
						<img
							src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3778&q=80"
							class="d-block w-100 center"
							alt="mount fuji"
						></img>
						<div class="col-4">
							<Carousel.Caption>
								<div class="container">
									<div class="carousel-caption text-start">
										<h1>{post.title}</h1>
										<p>{post.text}</p>
										<p>
											<a class="btn btn-lg btn-primary" href="#">
												Sign up today
											</a>
										</p>
									</div>
								</div>
							</Carousel.Caption>
						</div>
					</div> */}
                    <div class="col-md-8 col-sm-8 col-xs-8">
                        <img
                            src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3778&q=80"
                            class="d-block w-100 center"
                            alt="mount fuji"
                        ></img>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4">
                        <span class="pull-right text-bg-primary">
                            Thasos, an island surrounded by the crystal-clear
                            emerald waters of the Aegean Sea is part of the
                            Northeastern islands of Greece, also being the
                            closest one to the continent.
                        </span>
                    </div>
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
                </Carousel.Item>
                <Carousel.Item
                    onMouseEnter={() => descSetter(true)}
                    onMouseLeave={() => {
                        descSetter(false);
                        descPopSetter(false);
                    }}
                >
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
                        src={student_adv}
                        class="d-block w-100 center"
                        alt="StudentAdvisory"
                    ></img>
                    {/* <div class="container">
							<div class="carousel-caption text-start">
								<h1>Example headline.</h1>
								<p>
									Some representative placeholder content for the first slide of
									the carousel.
								</p>
								<p>
									<a class="btn btn-lg btn-primary" href="#">
										Sign up today
									</a>
								</p>
							</div>
						</div> */}
                    {descShow && (
                        <div
                            className="click-for-detail d-flex justify-content-center align-items-center"
                            onClick={() => descPopSetter(!descPop)}
                        >
                            Click Here For Details!
                        </div>
                    )}
                    <div
                        className={`carousel-desc ${
                            descPop && "animate-slideUp"
                        }`}
                    >
                        <div class="gradient-card align-middle d-flex justify-content-center">
                            <div className="gradient">
                                <div className="info ms-auto">
                                    <div className="title text-center">
                                        {post.title}
                                    </div>
                                    <div className="text">{post.text}</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="carousel-desc">
                        <div class="d-flex justify-content-center">
                            <div class="gradient-card align-middle">
                                <div className="gradient">
                                    <div className="info ms-auto">
                                        <div className="title text-center">
                                            {post.title}
                                        </div>
                                        <div className="text">{post.text}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="container">
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
						</div> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div class="d-flex justify-content-center">
                        <img
                            src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                            class="d-block w-100 center"
                            alt="mount fuji"
                        ></img>
                    </div>
                    {/* <div class="gradient-card">
						<div className="gradient">
							<div className="info">
								<div className="title text-center">{post.title}</div>
								<div className="text">{post.text}</div>
							</div>
						</div>
					</div> */}

                    <div className="carousel-desc">
                        <div class="d-flex justify-content-center">
                            <div class="gradient-card align-middle">
                                <div className="gradient">
                                    <div className="info ms-auto">
                                        <div className="title text-center">
                                            {post.title}
                                        </div>
                                        <div className="text">{post.text}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="container">
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
						</div> */}
                </Carousel.Item>
            </Carousel>
        );
    } else return null;
};

export default PostCarousel;
