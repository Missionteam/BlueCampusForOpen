import Header from "@/components/base/Header";
import WorkSpaceBackGround from "@/components/base/WorkSpaceBackGround";
import Stepper from "@/components/pages/index/course/Stepper";
import UserPage from "@/components/pages/userPage/UserPage";
import NetflixSlider from "@/components/ui/ImageSlider/NetflixSlider";
import BootCard from "@/components/ui/card/BootCard";
import ProgressCard from "@/components/ui/card/ProgressCard";
import TimeLine from "@/features/calendar/components/TimeLine";

export default function Page() {
  return (
    <>
      <WorkSpaceBackGround>
        <UserPage />
      </WorkSpaceBackGround>
    </>
  );
}
