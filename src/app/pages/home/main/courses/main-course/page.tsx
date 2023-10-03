import CourseHeader from "@/components/pages/index/course/CourseHeader";
import CourseIdeal from "@/components/pages/index/course/CourseIdeal";
import Stepper from "@/components/pages/index/course/Stepper";
import CourseCard from "@/components/ui/card/CourseCard";

export default function Page() {
  return (
    <>
      <CourseIdeal />
      <div className="bg-gray-200">
        <div
          className="container flex pt-12 items-start"
          style={{ height: "2000px" }}
        >
          <div className="col-sm-8" style={{ paddingTop: "12px" }}>
            <Stepper number="1" />
            <Stepper number="2" />
            <Stepper number="3" />
          </div>
          <div className="col-sm-4" style={{ padding: "12px" }}>
            <CourseCard url="/pages/home/main/calendar" />
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}
