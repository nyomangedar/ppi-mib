import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PostCarousel from "./PostCarousel";
import { useGetPostsQuery } from "../../features/posts/postsApiSlice";
import student_adv from "../../image/student_adv.png";
import { Buffer } from "buffer";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const CarouselBody = () => {
    const [descShow, descSetter] = useState(false);
    const [descPop, descPopSetter] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    const developmentUri = process.env.API_URI_BACKEND;

    let content;

    useEffect(() => {
        if (isTabletOrMobile) {
            descSetter(false);
            descPopSetter(false);
        }
    }, [isTabletOrMobile]);

    const detailProperties = {};

    // if (isLoading) content = <PulseLoader color={"#FFF"}/>
    if (isLoading) content = <p>Loading...</p>;

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>;
    }

    if (isSuccess) {
        console.log({ posts });
        const { ids, entities } = posts;
        const postList = ids?.length
            ? ids.map((postId) => (
                  <Carousel.Item
                      onMouseEnter={() => {
                          descSetter(!isTabletOrMobile && true);
                      }}
                      onMouseLeave={() => {
                          descSetter(false);
                          descPopSetter(false);
                      }}
                  >
                      <img
                          src={
                              isTabletOrMobile
                                  ? `${developmentUri}/${entities[postId].image_mobile}`
                                  : isBigScreen
                                  ? `${developmentUri}/${entities[postId].image_wide}`
                                  : `${developmentUri}/${entities[postId].image}`
                          }
                          class="d-block w-100 center"
                          alt="StudentAdvisory"
                      />
                      {descShow && (
                          <div
                              className="click-for-detail d-flex justify-content-center align-items-center"
                              onClick={() => descPopSetter(!descPop)}
                          >
                              <h3>Click Here For Details!</h3>
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
                                          {entities[postId].title}
                                      </div>
                                      <div className="text">
                                          {entities[postId].text}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Carousel.Item>
                  // <PostCarousel key={postId} postId={postId}></PostCarousel>
              ))
            : null;

        content = <Carousel interval={null}>{postList}</Carousel>;

        // content = (
        // 	<Carousel interval={null}>
        // 		<Carousel.Item
        // 			onMouseEnter={() => descSetter(true)}
        // 			onMouseLeave={() => {
        // 				descSetter(false);
        // 				descPopSetter(false);
        // 			}}
        // 		>
        // 			<img
        // 				src={
        // 					isTabletOrMobile
        // 						? `${developmentUri}/${entities["6365963bb265de140fb156e0"].image_mobile}`
        // 						: isBigScreen
        // 						? `${developmentUri}/${entities["6365963bb265de140fb156e0"].image_wide}`
        // 						: `${developmentUri}/${entities["6365963bb265de140fb156e0"].image}`
        // 				}
        // 				class="d-block w-100 center"
        // 				alt="StudentAdvisory"
        // 			/>
        // 			{descShow && (
        // 				<div
        // 					className="click-for-detail d-flex justify-content-center align-items-center"
        // 					onClick={() => descPopSetter(!descPop)}
        // 				>
        // 					<h3>Click Here For Details!</h3>
        // 				</div>
        // 			)}
        // 			<div className={`carousel-desc ${descPop && "animate-slideUp"}`}>
        // 				<div class="gradient-card align-middle d-flex justify-content-center">
        // 					<div className="gradient">
        // 						<div className="info ms-auto">
        // 							<div className="title text-center">
        // 								{entities["6365963bb265de140fb156e0"].title}
        // 							</div>
        // 							<div className="text fs-3">
        // 								{entities["6365963bb265de140fb156e0"].text}
        // 							</div>
        // 						</div>
        // 					</div>
        // 				</div>
        // 			</div>
        // 		</Carousel.Item>
        // 	</Carousel>
        // );
    }
    return content;
};

export default CarouselBody;
