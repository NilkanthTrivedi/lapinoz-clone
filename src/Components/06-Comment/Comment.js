import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation } from "swiper";

import styled from "styled-components";
import comment from "./CommentApi";

export default function Comment() {
    const [rev, setRev] = useState(comment);
    return (
        <>
            <div className="container my-5 px-2">
                <h2 className="my-4 fw-bold ps-3">
                    LET'S HEAR WHAT FOODIES SAY
                </h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    Navigation={true}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, FreeMode, Navigation]}
                    className="mySwiper pb-5"
                >
                    {rev.map((y) => {
                        const { id, Name, Review } = y;
                        return (
                            <SwiperSlide>
                                <div className="my-5" key={id}>
                                    <CommentBox>
                                        <i class="fa-sharp fa-solid fa-quote-left"></i>
                                        <div>
                                            <p>{y.Review}</p>
                                        </div>
                                        <i class="fa-sharp fa-solid fa-quote-right"></i>

                                        <i class="fa-sharp fa-solid fa-bolt-lightning"></i>
                                    </CommentBox>
                                    <Reviewer className="mt-4">
                                        <i>{y.Name}</i>
                                    </Reviewer>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

const CommentBox = styled.div`
    width: 600px;
    height: auto;
    background-color: rgb(230, 230, 230, 0.9);
    box-shadow: 2px 2px 7px rgb(230, 230, 230);
    padding: 30px;
    position: relative;

    div {
        padding: 10px;
    }

    .fa-quote-right {
        float: right;
        margin-bottom: 50px;
    }

    .fa-bolt-lightning {
        color: rgb(242, 242, 242);
        position: absolute;
        bottom: -8%;
        text-shadow: 1px 1px 5px rgb(230, 230, 230);
        font-size: 40px;
        border: none;
        z-index: -1;
    }
`;

const Reviewer = styled.p`
    font-size: 18px;
    margin-left: 10px;
    margin-top: 30px;
    font-weight: 600;
`;
