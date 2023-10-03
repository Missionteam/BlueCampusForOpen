import Header from "@/components/base/Header";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="h-screen">
        <div className="flex relative screen flex-col h-full justify-start">
          <Header />
          <div className="container flex items-stretch flex-grow">
            <div className="col-lg-6 flex-col flex" style={{ paddingLeft: "" }}>
              <h1 style={{ padding: "0 20px 20px 0" }}>日程が決定しました！</h1>
              <h2>当日、以下の時間になりましたら、zoomに入室してください。</h2>
              <h3 style={{ padding: "40px", textAlign: "center" }}>
                6/30 20:00~21:00
              </h3>
            </div>
            <div className="col-lg-6 flex flex-col items-center h-full">
              <img src={"/course-detail/hero-4.png"} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
