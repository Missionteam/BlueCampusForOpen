import { notoSansJP } from "@/app/fonts/font-old/notoSans";
import { ReactNode } from "react";

export default function CourseThumbnail({ title }: { title: ReactNode }) {
  return (
    <>
      <div className="bg-white flex h-hull" style={{ aspectRatio: "16/9" }}>
        <div className="w-4/6 flex font-bold">
          <h3
            className={notoSansJP.className}
            style={{ fontWeight: "700", fontSize: "1vw" }}
          >
            {title}
          </h3>
        </div>
        <div className="w-2/6 flex justify-start h-full">
          <img
            src="/course-detail/course-ideal-hero.png"
            alt=""
            style={{ width: "60%", padding: "10px" }}
          />
        </div>
      </div>
    </>
  );
}
