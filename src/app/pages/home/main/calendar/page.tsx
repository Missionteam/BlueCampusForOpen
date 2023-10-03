import CustomButton from "@/components/ui/button/Button";
import TimeLine from "@/features/calendar/components/TimeLine";
import Link from "next/link";
import { Calendar } from "react-big-calendar";

export default function Page() {
  return (
    <>
      <div className="container h-screen flex items-stretch">
        <div className="col-lg-3 relative">
          <h1 className="pt-16 pb-16">Select the date for the Rendezvous!</h1>
          <p className="pt-32" style={{ fontSize: "20px" }}>
            Here is the description about the time ajustment for the section.
            <br></br>
            <br></br>It will be long sentence for attribute viewers and move
            their passion.
          </p>

          <div className="absolute bottom-1/3 right-1/3">
            <Link href={"/pages/home/main/courses/day-desided"}>
              <CustomButton text="Deside" widthPadding="40px" />
            </Link>
          </div>
        </div>
        <div className="col-lg-9 h-full">
          <TimeLine />
        </div>
      </div>
    </>
  );
}
