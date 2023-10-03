import CustomButton from "@/components/ui/button/Button";
import styles from "./AllCoursesHeader.module.css";
import Header from "@/components/base/Header";

export default function AllCoursesHeader() {
  return (
    <>
      <div className="h-0 relative" style={{ paddingBottom: "26vw" }}>
        <div className="relative" style={{ height: "41.5vw" }}>
          {/* <img
            src={"/netflix/netflix-header.jpg"}
            alt={""}
            className="absolute top-0"
            style={{ width: "100%" }}
          /> */}
          <div className="bg-white w-full h-full relative">
            <Header />
            <img
              src="/course-detail/hero-4.png"
              alt=""
              className="absolute right-10"
            />
          </div>
          <div className={styles.vignetteLayer}></div>
          <div className={styles.heroVignette}></div>
          <div className="h-full w-full">
            <div className={styles.NetflixTitle}>
              <h1>
                Here are<br></br>Text
              </h1>
              <p style={{ fontSize: "1.2vw", marginBottom: "1.3vw" }}>
                Here is the description for users.Let's think the word sentence
                for attributint users infinitly.
              </p>
              <div className="flex ">
                <CustomButton
                  backgroundColor="white"
                  widthPadding="2vw"
                  color="black"
                  text="参加する"
                  borderRadius="5px"
                  style={{ fontSize: "1rem", marginRight: "5px" }}
                />
                <CustomButton
                  backgroundColor="#6D6D6EB3"
                  widthPadding="2vw"
                  color="white"
                  text="詳細を見る"
                  borderRadius="5px"
                  style={{ fontSize: "1rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
