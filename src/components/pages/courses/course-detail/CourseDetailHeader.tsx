import "@/components/pages/courses/course-detail/CourseDetailHeader.css";
import { Lato } from "@next/font/google";

export const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
});

const lato_700 = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function CourseDetailHeader() {
  return (
    <>
      <div
        className={`language-show__header text-center ${lato_700.className}`}
        style={{ fontWeight: "normal", paddingTop: "72px" }}
      >
        <h1>JavaScript</h1>
        <p>多様な可能性を秘めた フロントエンド言語</p>
      </div>
      <div className={`${lato.className} container flex`}>
        <div className={` language-description`}>
          <div className={` language-description__top`}>
            JavaScriptレッスンを学習されるみなさんへ
          </div>
          <div className={` language-description__bottom`}>
            <ul>
              <li>ES6とES5の違いはJavaScriptのバージョンです。</li>
              <li>
                初めてJavaScriptを学習される方は、最新バージョンのES6レッスンを受講することをおすすめします。
              </li>
            </ul>
            <p>
              ※
              旧JavaScriptレッスンはES5に名称を改めました。レッスンの内容に変更はございません。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
