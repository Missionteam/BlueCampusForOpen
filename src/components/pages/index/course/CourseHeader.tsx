import "@/utils/animations/animation.css";

export default function CourseHeader() {
  return (
    <>
      <div
        className="h-16 width-screen"
        style={{ backgroundColor: "#121212" }}
      ></div>
      <section
        className="hero__area-6 relative"
        style={{ backgroundColor: "#121212" }}
      >
        <div className="container g-0 line_4">
          <div className="row">
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 w-3/6 h-full"
              style={{ flex: "0 0 auto" }}
            >
              <div className="hero__content-6 hero__six_anim relative text-white mt-auto mb-auto">
                <img
                  className="hero__arrow-icon absolute right-0"
                  src="/course-detail/arrow-icon.png"
                  alt="Arrow Icon"
                  style={{ animation: "rightmove infinite 3s" }}
                />
                <h1 className="hero__title-6" style={{ fontSize: "6vw" }}>
                  Magical <br /> Axtra Startup Solution
                </h1>
                <p>
                  Our team always reviews all previous methods with <br />{" "}
                  models, and processes to determined
                </p>
                <a className="btn-started btn-hover" href="contact.html">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__right-6">
                <img src="/course-detail/hero-4.png" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="hero__shape absolute"
          src="/course-detail/hero-shape.png"
          alt="Shape Image"
          style={{ top: "22%", left: "0", animation: "leftmove infinite 4s" }}
        />
        <img
          className="hero__shape-2 absolute"
          src="/course-detail/hero-shape-2.png"
          alt="Layout"
          style={{ right: "7%", bottom: "30%" }}
        />
        <img
          className="hero__shape-3 absolute"
          src="/course-detail/hero-shape-3.png"
          alt="Star Icon"
          style={{
            left: "4%",
            bottom: "7%",
            animation: "rotate-icon 5s linear 0s infinite normal",
          }}
        />
      </section>
    </>
  );
}
