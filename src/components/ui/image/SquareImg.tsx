import { CSSProperties } from "react";

export default function SquareImg({
  src,
  alt = "",
  style,
}: {
  src: string;
  alt?: string;
  style?: CSSProperties;
}) {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "100%",
          ...style,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
