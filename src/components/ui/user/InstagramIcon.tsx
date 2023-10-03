export default function InstagramIcon({
  src,
  size,
  margin = "20px",
  padding = "4px",
}: {
  src: string;
  size: string;
  margin?: string;
  padding?: string;
}) {
  return (
    <>
      <img
        src={src}
        style={{
          width: size,
          height: size,
          objectFit: "cover",
          margin: margin,
          padding: padding,
          borderRadius: "50%",
          border: "1.5px solid #CFCFCF",
        }}
      />
    </>
  );
}

export function StoryIcon({
  src,
  size = "62px",
  margin = "10px",
  padding = "3.5px",
}: {
  src: string;
  size?: string;
  margin?: string;
  padding?: string;
}) {
  return (
    <InstagramIcon src={src} size={size} margin={margin} padding={padding} />
  );
}
