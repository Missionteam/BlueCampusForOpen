import { Noto_Serif_JP } from "@next/font/google";
import { Noto_Sans_JP } from "@next/font/google";
import localFont from 'next/font/local'
 

export const notoSansJP = Noto_Sans_JP({
    weight: ["400","500","600","700"],
    display: "swap",
    preload: false,
  });

export const notoSerifJP = Noto_Serif_JP({
    weight: ["200","300","400","500","600","700"],
    display: "swap",
    preload: false,
  });

export const dartsfont = localFont({ src: './dartsfont.woff2' })