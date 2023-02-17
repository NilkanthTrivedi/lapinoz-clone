import React, { useState } from "react";
import "bootstrap5/src/css/bootstrap.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper";
import bestSellerApi from "./ApiOne";

export default function SellerCard(props) {
    const shadow = {
        boxShadow: "2px 2px 3px lightgray  ",
    };
    const [state, setState] = useState(bestSellerApi);

    return (
        <>
            <div className="container p-4">
                <h2 className="my-4 fw-bold ps-3">Best Sellers</h2>
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    modules={[FreeMode, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper container"
                >
                    {state.map((x) => {
                        const { id, imgSrc, title, Disc } = x;
                        return (
                            <SwiperSlide style={shadow}>
                                <div className="card d-flex p-2" key={id}>
                                    <img
                                        src={x.imgSrc}
                                        className="card-img-top"
                                        style={{
                                            height: "270px",
                                            width: "100%",
                                        }}
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {x.title}
                                        </h5>
                                        <p className="card-text">{x.Disc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}
