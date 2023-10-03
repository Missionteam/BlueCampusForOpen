"use client";
import CourseDetailPage from "@/components/pages/courses/course-detail/CourseDetailPage";
import { courses } from "@/db/courses";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const course = courses[id];

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
