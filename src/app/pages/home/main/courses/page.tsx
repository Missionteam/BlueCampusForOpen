"use client";
import BootCard from "@/components/ui/card/BootCard";
import { CardList } from "@/components/ui/cardList/CardList";
import { Noto_Sans_JP } from "@next/font/google";
import Grid from "@mui/material/Unstable_Grid2";

const notoSansJP500 = Noto_Sans_JP({
  weight: "500",
  display: "swap",
  preload: false,
});

export default function Page() {
  const styles: React.CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(to bottom right, #ebf4ff, #ffffff, #e0f7fa)",
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="app-blue w-screen pt-16 pb-16">
          <h1 className={`text-center text-white ${notoSansJP500.className}`}>
            冒険を始めよう
          </h1>
        </div>
        -
        <div className="w-4/6">
          <div className="mb-16">
            <CardList text="・挑戦したいあなたへ">
              <BootCard />
              <BootCard />
              <BootCard />
            </CardList>
            <CardList text="・既に挑戦しているあなたへ">
              <BootCard />
              <BootCard />
              <BootCard />
            </CardList>
          </div>
        </div>
      </div>
    </>
  );
}
