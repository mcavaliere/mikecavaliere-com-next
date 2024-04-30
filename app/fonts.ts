import { Barlow } from "next/font/google";
import { Poppins } from "next/font/google";

const barlow = Barlow({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-barlow",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

export const fonts = {
  barlow,
  poppins,
};
