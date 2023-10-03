
import { Noto_Sans_JP } from "@next/font/google";



export const notoSansJP600 = Noto_Sans_JP({
  weight: "600",
  display: "swap",
  preload: false,
});
export const notoSansJP500 = Noto_Sans_JP({
  weight: "500",
  display: "swap",
  preload: false,
});

export const notoSansJP = Noto_Sans_JP({
    weight: ["400","500","600","700"],
    display: "swap",
    preload: false,
  });