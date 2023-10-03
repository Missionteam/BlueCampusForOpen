import { StepperInfo } from "@/components/pages/courses/course-detail/CourseDetailPage";
import { ReactNode } from "react";
import { CardTitle } from "reactstrap";

export const courses: Course[] = [
  {
    id: "0",
    title: (
      <>
        新しいことに<br></br>挑戦しよう
      </>
    ),
    image: "",
    stepperInfos: [
      { number: "1", title: "顔合わせをしてお話をしながら、概要を一緒に学ぶ" },
      { number: "2", title: "アイディアを立ててみる" },
      { number: "3", title: "即実践の方法を学ぶ" },
      { number: "4", title: "そのアイディアを短期間で実践してみる" },
    ],
    cardTitle: "新しいことに挑戦しよう",
  },
  {
    id: "2",
    title: (
      <>
        既に頑張っている<br></br>あなたに
      </>
    ),
    image: "",
    stepperInfos: [
      { number: "1", title: "顔合わせをしてお話をしながら、概要を一緒に学ぶ" },
      { number: "2", title: "アイディアを立ててみる" },
      { number: "3", title: "即実践の方法を学ぶ" },
      { number: "4", title: "そのアイディアを短期間で実践してみる" },
    ],
    cardTitle: "新しいことに挑戦しよう",
  },
  // {
  //   id: "0",
  //   title: (
  //     <>
  //       新しいことに<br></br>挑戦しよう
  //     </>
  //   ),
  //   image: "https://example.com/image1.png",
  //   stepperInfos: [
  //     { number: "1", title: "顔合わせをしてお話をしながら、概要を一緒に学ぶ" },
  //     { number: "2", title: "アイディアを立ててみる" },
  //     { number: "3", title: "即実践の方法を学ぶ" },
  //     { number: "4", title: "そのアイディアを短期間で実践してみる" },
  //   ],
  //   cardTitle: "新しいことに挑戦しよう",
  // },
  // {
  //   id: "1",
  //   title: (
  //     <>
  //       一か月で<br></br>起業に挑戦しよう
  //     </>
  //   ),
  //   image: "https://example.com/image1.png",
  //   stepperInfos: [
  //     { number: "1", title: "顔合わせをしてお話をしながら、概要を一緒に学ぶ" },
  //     { number: "2", title: "アイディアを立ててみる" },
  //     { number: "3", title: "即実践の方法を学ぶ" },
  //     { number: "4", title: "そのアイディアを短期間で実践してみる" },
  //   ],
  //   cardTitle: "起業に挑戦しよう",
  // },
  // {
  //   id: "2",
  //   title: (
  //     <>
  //       10分通話でだらける<br></br>自分にさよならを
  //     </>
  //   ),
  //   image: "https://example.com/image2.png",
  //   stepperInfos: [
  //     { number: "1", title: "朝、夜と通話したい日時を決める" },
  //     { number: "2", title: "当日の朝、10分間、マッチした相手と通話する" },
  //     { number: "3", title: "「今日の目標」について話す" },
  //     { number: "4", title: "その日の夜、目標を達成できたかについて話す" },
  //   ],
  //   cardTitle: "だらける自分にさよならを",
  // },
  // {
  //   id: "3",
  //   title: "脱怠惰同盟",
  //   image: "https://example.com/image3.png",
  //   stepperInfos: [
  //     {
  //       number: "1",
  //       title: "30分間のzoomセッションで、だらけちゃう自分について話す",
  //     },
  //     { number: "2", title: "怠惰を脱するための、勉強会を行う" },
  //     { number: "3", title: "二人で、それを実践する" },
  //     { number: "4", title: "二人の立てた目標を実現する" },
  //   ],
  //   cardTitle: "脱怠惰同盟",
  // },
  // {
  //   id: "4",
  //   title: "男を磨く塾",
  //   image: "https://example.com/image4.png",
  //   stepperInfos: [
  //     { number: "1", title: "30分のzoom勉強会で、顔合わせをする" },
  //     { number: "2", title: "チームメンバーと一緒に、男を磨く" },
  //     { number: "3", title: "異性と一緒にデートに行く" },
  //     { number: "4", title: "最終日、理想の自分になれたかの審査会を行う" },
  //   ],
  //   cardTitle: "男を磨く塾",
  // },
  // {
  //   id: "5",
  //   title: (
  //     <>
  //       お互いを支え合う。<br></br>お互いをメンタリング<br></br>する。
  //     </>
  //   ),
  //   image: "https://example.com/image5.png",
  //   stepperInfos: [
  //     { number: "1", title: "お互いを支え合うパートナーを見つける" },
  //     { number: "2", title: "お互いの目標、悩みを話す" },
  //     {
  //       number: "3",
  //       title: "つらいとき、悩んだときに、メンタリングしてもらう",
  //     },
  //     { number: "4", title: "お互いを支え合えるパートナーになる" },
  //   ],
  //   cardTitle: "お互いを支え合う",
  // },
  // {
  //   id: "6",
  //   title: "コミュニケーション塾",
  //   image: "https://example.com/image6.png",
  //   stepperInfos: [
  //     { number: "1", title: "まず、異性とデートに行く" },
  //     { number: "2", title: "zoomで基礎理論を学ぶ" },
  //     { number: "3", title: "異性とデートを繰り返し、理論を実践する" },
  //     { number: "4", title: "最終審査会に出席する" },
  //   ],
  //   cardTitle: "コミュニケーション塾",
  // },
  // {
  //   id: "7",
  //   title: "恋愛塾",
  //   image: "https://example.com/image7.png",
  //   stepperInfos: [
  //     { number: "1", title: "zoomで基礎理論を学ぶ" },
  //     { number: "2", title: "自分が実践する行動を決める" },
  //     { number: "3", title: "仲間とともに、行動を実践する" },
  //     { number: "4", title: "最終デートを行う" },
  //   ],
  //   cardTitle: "恋愛塾",
  // },
  // {
  //   id: "8",
  //   title: "優秀になる",
  //   image: "https://example.com/image8.png",
  //   stepperInfos: [
  //     { number: "1", title: "「優秀」な人と話す" },
  //     { number: "2", title: "「優秀」になるために、必要なことを学ぶ" },
  //     { number: "3", title: "「優秀」になるために必要なことを実践する" },
  //     { number: "4", title: "「優秀」になったかどうかのテストを受ける" },
  //   ],
  //   cardTitle: "優秀になる",
  // },
  // {
  //   id: "9",
  //   title: "おしゃれを極める",
  //   image: "https://example.com/image9.png",
  //   stepperInfos: [
  //     { number: "1", title: "なりたいおしゃれをメンターと話す" },
  //     { number: "2", title: "メンターと一緒に街をめぐる" },
  //     { number: "3", title: "おしゃれの手法を学習する" },
  //     { number: "4", title: "異性とデートに出かける" },
  //   ],
  //   cardTitle: "おしゃれを極める",
  // },
  // {
  //   id: "10",
  //   title: "頭のいい人になる",
  //   image: "https://example.com/image10.png",
  //   stepperInfos: [
  //     { number: "1", title: "「頭のいい人」と話す" },
  //     { number: "2", title: "「頭のいい人」になるために必要なことを学ぶ" },
  //     { number: "3", title: "色んな人と話ながら、「頭のいい人」を実践する" },
  //     { number: "4", title: "最終試験を受ける" },
  //   ],
  //   cardTitle: "頭のいい人になる",
  // },
  // {
  //   id: "11",
  //   title: "理想の恋人になる",
  //   image: "https://example.com/image11.png",
  //   stepperInfos: [
  //     {
  //       number: "1",
  //       title: "参加者と話しながら、自分の求める理想の恋人、を定義する",
  //     },
  //     { number: "2", title: "それを実現するための手法を明確にする" },
  //     { number: "3", title: "同じ志を持った同士とともに、それを実践する" },
  //     { number: "4", title: "恋人に、自分が成長できたかどうかを尋ねる" },
  //   ],
  //   cardTitle: "理想の恋人になる",
  // },
  // {
  //   id: "12",
  //   title: "最高に「のんびり」した休日を過ごす",
  //   image: "https://example.com/image12.png",
  //   stepperInfos: [
  //     {
  //       number: "1",
  //       title: "最高ののんびり計画を、のんびり仲間と一緒にだらだら見つける",
  //     },
  //     { number: "2", title: "のんびり仲間とともに、のんびりを実行する" },
  //     {
  //       number: "3",
  //       title: "ふと気が向いたときに、のんびり日よりの募集をかける",
  //     },
  //     { number: "4", title: "のんびりしたいときに、いつでものんびりする" },
  //   ],
  //   cardTitle: "最高に「のんびり」した休日を",
  // },
];

export type Course = {
  id: string;
  title: ReactNode;
  image: string;
  stepperInfos: StepperInfo[];
  cardTitle: string;
};
