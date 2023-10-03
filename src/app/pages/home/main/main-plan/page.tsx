"use client";
import Header from "@/components/base/Header";
import MainPlanHeader from "@/components/pages/index/mainPlan/MainPlanHeader";
import SticyNote from "@/components/ui/StickyNote";
import CustomButton from "@/components/ui/button/Button";
import TextCard from "@/components/ui/card/TextCard";
import Link from "next/link";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <>
      <Header />
      <MainPlanHeader />
      <div className="flex justify-center items-center">
        <SticyNote></SticyNote>
        <SticyNote></SticyNote>
        <Link href={"/pages/home/main/courses"}>
          <CustomButton text="参加する" />
        </Link>

        <SticyNote></SticyNote>
        <SticyNote></SticyNote>
      </div>
      <div className="flex justify-around">
        <TextCard title="" body="" />
        <TextCard title="" body="" />
        <TextCard title="" body="" />
      </div>
    </>
  );
}
