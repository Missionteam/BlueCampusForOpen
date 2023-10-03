"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NetflixSlider.css";
import { notoSansJP } from "@/app/fonts/font-old/notoSans";

// import required modules
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import { Course } from "@/db/courses";
import CourseThumbnail from "../courseThumbnail/CourseThumbnail";

const styles = {
  aspectRatio: {
    position: "relative" as "relative",
    width: "100%",
    height: 0,
    paddingBottom: "56.25%", // 16:9の縦横比
    overflow: "hidden" as "hidden",
  },
  img: {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover", // 画像をカバーとして使う場合
  },
};

export default function App({
  text = "人気急上昇中の作品",
  url1,
  link1 = "",
  url2,
  link2 = "",
  url3,
  link3 = "",
  url4,
  link4 = "",
  url5,
  link5 = "",
  courses,
}: {
  text?: string;
  url1: string;
  link1?: string;
  url2: string;
  link2?: string;
  url3: string;
  link3?: string;
  url4: string;
  link4?: string;
  url5: string;
  link5?: string;
  courses: Course[];
}) {
  return (
    <div
      style={{ padding: "1.5vw 0", zIndex: "10", position: "relative" }}
      className="bg"
    >
      <h2
        className="text-white"
        style={{
          fontFamily: "Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
          fontSize: "1.4vw",
          margin: "0 4% 0.5em",
        }}
      >
        {text}
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={6}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper absolute left-0 top-0"
        style={{ padding: " 0 4%" }}
      >
        {courses.map((course, index) => (
          <SwiperSlide>
            <Link
              href={`/pages/home/main/courses/course-introduction?id=${course.id}`}
            >
              <CourseThumbnail title={course.title} />
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div style={styles.aspectRatio}>
            <img src="image1.png" alt="Description" style={styles.img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.aspectRatio}>
            <img src="image1.png" alt="Description" style={styles.img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.aspectRatio}>
            <img src="image1.png" alt="Description" style={styles.img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.aspectRatio}>
            <img src="image1.png" alt="Description" style={styles.img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.aspectRatio}>
            <img src="image1.png" alt="Description" style={styles.img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={styles.aspectRatio}>
            <img src="image1.png" alt="Description" style={styles.img} />
          </div>
        </SwiperSlide>

        {/* {courses.map((course, index) => (
          <SwiperSlide>
            <Link
              href={`/pages/home/main/courses/course-introduction?id=${course.id}`}
            >
              <CourseThumbnail title={course.title} />
            </Link>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
}
