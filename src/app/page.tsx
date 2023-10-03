import AllCoursesHeader from "@/components/pages/courses/all-courses/AllCoursesHeader";
import NetflixSlider from "@/components/ui/ImageSlider/NetflixSlider";
import styles from "./pages/home/all-courses/all-courses.module.css";
import Image from "next/image";
import Header from "@/components/base/Header";
import { courses } from "@/db/courses";

export default function Page() {
  const category1Courses = courses.slice(0, 1);
  const category2Courses = courses.slice(1, 10);

  return (
    <>
      <div className="">
        <div className={styles.bg}>
          <AllCoursesHeader />
          <div className="color-black z-10">
            <NetflixSlider
              text="Here are category name"
              url1="/course-card/courseCard1.png"
              link1="/pages/home/main/courses/main-course"
              url2="/course-card/courseBlank.png"
              link2={`/pages/home/main/courses/course-introduction?id=0`}
              url3="/course-card/courseBlank.png"
              url4="/course-card/courseBlank.png"
              url5="/course-card/courseBlank.png"
              courses={category1Courses}
            />
            <NetflixSlider
              text="Here are category name"
              url1="/course-card/courseCard2.png"
              url2="/course-card/courseBlank.png"
              url3="/course-card/courseBlank.png"
              url4="/course-card/courseBlank.png"
              url5="/course-card/courseBlank.png"
              courses={category2Courses}
            />

            {/* <NetflixSlider
              text="Here are category name"
              url1="0.png"
              url2="0.png"
              url3="0.png"
              url4="0.png"
              url5="0.png"
            /> */}
            {/* <NetflixSlider
              url1="1.jpg"
              url2="2.jpg"
              url3="3.webp"
              url4="4.webp"
              url5="5.jpg"
            />
            <NetflixSlider
              text="検索で人気の作品"
              url1="6.webp"
              url2="7.webp"
              url3="8.webp"
              url4="9.webp"
              url5="10.jpg"
            />
            <NetflixSlider
              url1="1.jpg"
              url2="2.jpg"
              url3="3.webp"
              url4="4.webp"
              url5="5.jpg"
            />
            <NetflixSlider
              text="検索で人気の作品"
              url1="6.webp"
              url2="7.webp"
              url3="8.webp"
              url4="9.webp"
              url5="10.jpg"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
