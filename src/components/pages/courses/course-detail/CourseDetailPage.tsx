import CourseCard from "@/components/ui/card/CourseCard";
import CourseIdeal from "../../index/course/CourseIdeal";
import Stepper from "../../index/course/Stepper";
import { ReactNode } from "react";

export interface StepperInfo {
  number: string;
  title: string;
  text?: string;
}

export default function CourseDetailPage({
  headerTitleHTML,
  stepperInfos,
  cardTitle: cardText,
}: {
  headerTitleHTML: ReactNode;
  stepperInfos: StepperInfo[];
  cardTitle: string;
}) {
  return (
    <>
      <CourseIdeal textHTML={headerTitleHTML} />
      <div className="bg-gray-200">
        <div
          className="container flex pt-12 items-start"
          style={{ height: "2000px" }}
        >
          <div className="col-sm-8" style={{ paddingTop: "12px" }}>
            {stepperInfos.map((stepper, index) => (
              <Stepper
                key={index}
                number={stepper.number}
                title={stepper.title}
                text={stepper.text}
              />
            ))}
          </div>
          <div className="col-sm-4" style={{ padding: "12px" }}>
            <CourseCard url="/pages/home/main/calendar" title={cardText} />
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}
