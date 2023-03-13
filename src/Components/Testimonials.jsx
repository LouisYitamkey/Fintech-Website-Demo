import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonials() {
  return (

    
    <>
    <div className="bg-slate-100 w-full ">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex justify-center items-center ">
                <p className="text-4xl py-24 "> Testimonials</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex justify-center items-center ">
                <p className="text-4xl py-24 ">Testimonials </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex justify-center items-center ">
                <p className="text-4xl py-24 "> Testimonials </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex justify-center items-center ">
                <p className="text-4xl py-24 ">Testimonials </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex justify-center items-center ">
                <p className="text-4xl py-24 "> Testimonials</p>
            </div>
        </SwiperSlide>
      
     
      </Swiper>
        
    </div>
    
    </>
  );
}
