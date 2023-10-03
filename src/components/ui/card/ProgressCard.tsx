import { lato } from "@/components/pages/courses/course-detail/CourseDetailHeader";
import CustomButton from "../button/Button";

export default function ProgressCard({
  title = "JavaScript I",
  description = "「ES6」はJavaScriptの新しい仕様で、従来より効率的に書けることから注目されています。まずこのレッスンでは、基本的な文法や変数・定数の使い方、条件分岐などを学びましょう！",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      <div
        className={`${lato.className} container flex items-stretch`}
        style={{
          maxWidth: "960px",
          borderRadius: "3px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.04);",
        }}
      >
        <div className="col-sm-3">
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "#a0c3f7",
              padding: "38px 0",
              borderRadius: "3px 0 0 3px",
            }}
          >
            <img
              src="/progress-card/progressIcon.svg"
              alt=""
              style={{ height: "111px" }}
            />
            <div
              className="c-progress c-progress--lesson-card c-progress--es6-study"
              style={{
                height: "15px",
                width: "86px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.43)",
                marginBottom: "5px",
                marginTop: "5px",
                borderRadius: "40px",
              }}
            >
              <div
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={63}
                className="c-progress-bar c-progress-bar--es6-study h-full"
                role="progressbar"
                style={{
                  width: "63%",
                  borderRadius: "40px",
                  backgroundColor: "#71a5f3",
                }}
              ></div>
            </div>
            <p
              className="c-progress-percentage c-progress-percentage--es6-study"
              style={{ color: "#4288ef" }}
            >
              63%
            </p>
          </div>
        </div>
        <div
          className="col-sm-9 bg-white relative"
          style={{
            padding: "27px 40px 24px 20px",
            borderRadius: "0 3px 3px 0",
          }}
        >
          <div className="lesson-overview-wrapper">
            <p
              className="lesson-overview__category lesson-overview__category--study"
              style={{
                border: "1px solid #51d4e2",
                color: "#51d4e2",
                padding: "3px 10px",
                marginLeft: "-5px",
                marginBottom: "6px",
                borderRadius: "20px",
                fontSize: "13px",
                width: "104px",
                textAlign: "center",
              }}
            >
              学習レッスン
            </p>
            <div className="lesson-overview__tag-wrapper"></div>
            <div className="flex justify-start">
              <span
                className="lesson-overview__title"
                style={{
                  color: "#235d8a",
                  paddingRight: "22px",
                  borderRight: "1px solid #dcdcdc",
                  fontSize: "1.5rem",
                }}
              >
                {title}
              </span>
              <span
                className="lesson-icon-wrapper flex justify-start"
                style={{
                  paddingLeft: "20px",
                  marginLeft: "-4px",
                  verticalAlign: "top",
                  marginTop: "11px",
                  fontSize: "0.75rem",
                }}
              >
                <img
                  style={{ marginRight: "5px" }}
                  src="https://prog-8.com/assets/icons/clock-e8d8a239a4d9ba79c3edd9acbb9497deb15a9429f8311a27b5432134f4518c1e.svg"
                />
                <span>目安時間 2h</span>
              </span>
            </div>

            <div
              className="lesson-overview__introduction "
              style={{
                margin: "10px 0",
                fontSize: "14px",
                color: "#5876a3",
                font: "Lato",
              }}
            >
              {description}
            </div>
            <div style={{ marginTop: "10px", float: "right" }}>
              <CustomButton
                text="続きから始める"
                backgroundColor="#a0c3f7"
                borderRadius="0px"
              />
              <CustomButton
                text="レッスン詳細へ"
                borderRadius="0px"
                backgroundColor="transparent"
                border="1px solid #a0c3f7"
                color="#a0c3f7"
                style={{ marginLeft: "15px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
