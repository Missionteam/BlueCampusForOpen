"use client";
import "@/utils/animations/animation.css";
import { notoSansJP } from "@/app/fonts/font-old/notoSans";
import React, { ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CourseIdeal({
  textHTML = (
    <>
      新しいことに<br></br>挑戦する
    </>
  ),
}: {
  textHTML: ReactNode;
}) {
  return (
    <>
      <Swiper
        // pagination={true}
        loop={true}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div
            className="bg-white w-full relative flex justify-start"
            style={{ height: "38vw" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-white w-full relative flex justify-start"
            style={{ height: "38vw" }}
          >
            <div className="container flex items-stretch h-full">
              <div className="col-lg-8 flex h-full">
                <div
                  className={notoSansJP.className}
                  style={{ paddingBottom: "5%" }}
                >
                  <h1
                    style={{
                      fontSize: "64px",
                      fontWeight: "700",
                      lineHeight: "1.4",
                    }}
                  >
                    {textHTML}
                  </h1>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="absolute"
                  style={{ right: "20vw", top: "8%", width: "10%" }}
                >
                  <img src="/course-detail/course-ideal-hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-white w-full relative flex justify-start"
            style={{ height: "38vw" }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
