"use client";
import CourseCardList from "@/utils/list/CourseCardList";
import { InfoItemProps } from "@/utils/list/CourseCardList";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import TimerIcon from "@mui/icons-material/Timer";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LanguageIcon from "@mui/icons-material/Language";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import { notoSansJP } from "@/app/fonts/font-old/notoSans";

export default function CourseCard({
  title = defaultValue.title,
  text = defaultValue.text,
  buttonText = defaultValue.buttonText,
  imgSrc = defaultValue.imgSrc,
  url,
}: {
  title?: string;
  text?: string;
  buttonText?: string;
  imgSrc?: string;
  url: string;
}) {
  return (
    <>
      <div style={{ backgroundColor: "#F6F8FA" }}>
        <div className="bg-gray-500 w-full flex" style={{ height: "15vw" }}>
          {/* <div className="w-4/6 flex font-bold">
            <h3
              className={notoSansJP.className}
              style={{ fontWeight: "700", fontSize: "1vw" }}
            >
              1か月で<br></br>起業に挑戦する
            </h3>
          </div>
          <div className="w-2/6 flex justify-start h-full">
            <img
              src="/course-detail/course-ideal-hero.png"
              alt=""
              style={{ width: "60%", padding: "10px" }}
            />
          </div> */}
        </div>
        <div className={`p-3 ${notoSansJP}`}>
          <h3
            className="font-bold text-center text-"
            style={{ fontSize: "24px", fontWeight: "900" }}
          >
            {title}
          </h3>
          <p style={{ fontSize: "12px", textAlign: "end" }}>{text}</p>
          <Link href={url}>
            <div
              className="flex w-full mb-3 text-white text-center"
              style={{ backgroundColor: "#3B2A56", padding: "10px" }}
            >
              <p className="m-0">{buttonText}</p>
            </div>
          </Link>
          <CourseCardList items={items}></CourseCardList>
        </div>
      </div>
    </>
  );
}

const defaultValue = {
  title: "Free",
  text: " price: Free",
  buttonText: "Enrol Now",
  imgSrc: "/image1.png",
};

const items: InfoItemProps[] = [
  {
    Icon: AlignVerticalBottomIcon,
    label: "Course Level",
    value: "Intermediate",
  },
  {
    Icon: ScheduleIcon,
    label: "Duration",
    value: "7 weeks",
  },
  {
    Icon: WbSunnyIcon,
    label: "Certificate",
    value: "Yes",
  },
  {
    Icon: LanguageIcon,
    label: "Duration",
    value: "7 weeks",
  },
  {
    Icon: LockIcon,
    label: "Access",
    value: "Lifetime",
  },
];
