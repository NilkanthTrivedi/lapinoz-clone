import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

//
import "./Launch.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function NwLaunch() {
    return (
        <>
            <div
                className="container-fluid my-3 pb-3"
                style={{
                    padding: "0px 120px",
                    background: "rgb(242, 242, 242 ,0.5)",
                }}
            >
                <Swiper
                    slidesPerView={3.8}
                    spaceBetween={80}
                    Navigation={true}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, FreeMode, Navigation]}
                    className="mySwiper px-1"
                >
                    <SwiperSlide className="mb-5">
                        <Card1 Location="Nainital Road" city="Haldwani" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-5">
                        <Card2 Location="Malapet" city="Hydrabad" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card3 Location="Pushraj Chauraha" city="Ayodhya" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card1 Location="Dongari Road" city="Virar" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card2 Location="Halol Harni Road" city="Halol" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card3 Location="Punjabi Mohalla" city="Ambala Cantt" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card1 Location="Clvil Line" city="Azamgarh" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card2 Location="Carmelaram" city="Bengaluru" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card3 Location="J P Nagar" city="Bengaluru" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card1
                            Location="Opposite Hathi Gate"
                            city="Dwarka Gujarat"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card2 Location="Red Square Market" city="Hisar" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card3 Location="J P Nagar" city="Bengaluru" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
