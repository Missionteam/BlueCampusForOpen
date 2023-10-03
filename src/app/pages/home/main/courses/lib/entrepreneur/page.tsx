import CourseDetailPage from "@/components/pages/courses/course-detail/CourseDetailPage";
import { courses } from "@/db/courses";

export default function Page() {
  const headerTitleHTML = (
    <>
      １か月間で<br></br>起業に挑戦する
    </>
  );
  const course = courses[1];
  const stepperInfos = [
    { number: "1", title: "顔合わせをしてお話をしながら、概要を一緒に学ぶ" },
    { number: "2", title: "アイディアを立ててみる" },
    { number: "3", title: "即実行の手法を学ぶ" },
    { number: "4", title: "アイディアを短期間で実現する" },
  ];
  return (
    <>
      <CourseDetailPage
        headerTitleHTML={course.title}
        stepperInfos={course.stepperInfos}
        cardTitle={course.cardTitle}
      />
    </>
  );
}
