import SwipeComponent from "@/components/ui/NextImageSlider/ImageSlider";

export default function MainPlanHeader() {
  return (
    <>
      <div
        style={{ backgroundColor: "#AFD2E5" }}
        className="w-full pt-16 pb-16"
      >
        <SwipeComponent>
          <div className="flex" style={{ height: "calc(100vw / 3.14)" }}>
            <h1 className="text-center">Let's Start the Challenge</h1>
          </div>
          <img src="/main-plan/HeaderImg.png" alt="image 2" />
          {/* more components as needed */}
        </SwipeComponent>
        {/* <img src="/main-plan/HeaderImg.png" alt="" /> */}
      </div>
    </>
  );
}
