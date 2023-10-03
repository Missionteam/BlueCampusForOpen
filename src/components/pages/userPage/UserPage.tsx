"use client";
import { notoSerifJP } from "@/app/fonts/fonts";
import SquareImg from "@/components/ui/image/SquareImg";
import InstagramIcon, { StoryIcon } from "@/components/ui/user/InstagramIcon";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function UserPage() {
  return (
    <>
      <div className="flex justify-start w-full">
        <InstagramIcon
          src="/user-page/UserImage.JPG"
          size="90px"
          margin="20px 20px 20px 50px"
        />
        <h1>林道春樹</h1>
      </div>
      <p
        className={`${notoSerifJP.className} font-extralight text-center`}
        style={{ padding: "10px 2px", fontSize: "20px" }}
      >
        「僕自身が理想的だと考える表現は、
        <br />
        最も簡単な言葉で最も難解な道理を<br></br>表現すること。」
      </p>

      <Divider
        style={{ borderTop: "1.4px solid #D4D4D4", width: "calc(100% - 20px)" }}
      />
      <div className="flex justify-start" style={{ margin: "10px 0" }}>
        <StoryIcon src="/user-page/UserStory1.png" />
        <StoryIcon src="/user-page/UserStory2.png" />
        <StoryIcon src="/user-page/UserStory3.png" />
        <StoryIcon src="/user-page/UserStory4.png" />
        <StoryIcon src="/user-page/UserStory5.png" />
      </div>

      <Grid container spacing={0.2} className="w-full mt-4">
        <Grid xs={4}>
          <SquareImg src="/user-page/UserStory1.png" />
        </Grid>
        <Grid xs={4}>
          <SquareImg src="/user-page/UserStory2.png" />
        </Grid>
        <Grid xs={4}>
          <SquareImg src="/user-page/UserStory3.png" />
        </Grid>
        <Grid xs={4}>
          <SquareImg src="/user-page/UserStory4.png" />
        </Grid>
        <Grid xs={4}>
          <SquareImg src="/user-page/UserStory5.png" />
        </Grid>
        <Grid xs={4}>
          <SquareImg src="/user-page/UserStory1.png" />
        </Grid>
      </Grid>

      {/* <div className="bg-gray-500 h-48 w-full flex">目標</div> */}
    </>
  );
}
