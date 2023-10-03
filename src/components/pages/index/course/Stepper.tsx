"use client";
import Divider from "@mui/material/Divider";

export default function Stepper({
  number = v.number,
  title = v.title,
  text = v.text,
}: {
  number?: string;
  title?: string;
  text?: string;
}) {
  return (
    <>
      <div className="flex items-stretch" style={{ marginBottom: "20px" }}>
        <div>
          <div
            className="bg-blue-400 flex"
            style={{ width: "50px", height: "50px", borderRadius: "25px" }}
          >
            {number}
          </div>
          <div
            id="target"
            className="ml-auto mr-auto w-1 "
            style={{
              borderLeft: "1px solid black",
              width: "0.1px",
              height: "calc(100% - 60px)",
            }}
          />
        </div>
        <div style={{ padding: "0 30px" }}>
          <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          <Divider />
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </>
  );
}

const v = {
  number: "1",
  title: "This is Awsome APP.<br>Try start Now!",
  text: " Here is some discription about the awsome service.It will attribute you to read the sentence.<br> This text shold be brief and strong sentence.However, you don't take too much time for considering the text.",
};
