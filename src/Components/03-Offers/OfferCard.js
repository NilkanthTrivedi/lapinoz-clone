import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import ReusableCard from "./ReusableCard";

import "./offer.css";

export default function Caro() {
    const cardstyle = {
        width: "100%",
        height: "auto",
        padding: "0px 150px",
    };
    const justdemo = {
        width: "100%",
        height: "150px",
        backgroundColor: "rgb(242, 242, 242)",
        paddingLeft: "150px",
        paddingTop: "20px",
    };
    return (
        <>
            <div
                className="container-fluid py-4 mt-2 justify-content-center"
                style={cardstyle}
            >
                <div className="mt-2">
                    <h3 className="mb-2 fw-bold">Deals And Offers</h3>
                </div>
                <div className="OfferSlider mt-5 mb-2 border-0">
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        k
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        slidesPerView={2.6}
                        spaceBetween={40}
                    >
                        <SwiperSlide className="overflow-hidden border-0">
                            <ReusableCard img="./Images/deals-banner.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReusableCard img="./Images/deals-banner-two.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReusableCard img="./Images/deals-banner-three.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReusableCard img="./Images/deals-banner-four.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReusableCard img="./Images/deals-banner-five.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="just_demo" style={justdemo}>
                <h2 className="fw-bold">Explore</h2>
            </div>
        </>
    );
}
