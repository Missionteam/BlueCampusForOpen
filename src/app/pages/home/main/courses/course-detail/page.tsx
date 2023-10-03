import CourseDetailHeader from "@/components/pages/courses/course-detail/CourseDetailHeader";
import Bar from "@/components/ui/bar/Bar";
import ProgressCard from "@/components/ui/card/ProgressCard";

export default function Page() {
  return (
    <>
      <div className="mr-auto ml-auto" style={{ maxWidth: "960px" }}>
        <CourseDetailHeader />
        <ProgressCard />
        <Bar />
        <ProgressCard title="JavaScriptⅡ" />
        <Bar />
        <ProgressCard title="JavaScriptⅢ" />
      </div>
      <div className="h-32"></div>
    </>
  );
}
