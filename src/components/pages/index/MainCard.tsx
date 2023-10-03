import React from "react";
import ImageSlider from "@/components/ui/ImageSlider/ImageSlider";
import Link from "next/link";

const images = ["/image1.png", "/image2.png"]; // ここに実際の画像URLを指定します

const MainCard: React.FC = () => (
  <Link href={"/pages/home/main/main-plan"}>
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 h-96 shadow-lg rounded-lg flex flex-col">
        <ImageSlider images={images} />
        <div className="flex items-center justify-center h-2/6 rounded-b-lg bg-white text-center w-full">
          <p>何かに挑戦してみる</p>
        </div>
      </div>
    </div>
  </Link>
);

export default MainCard;
