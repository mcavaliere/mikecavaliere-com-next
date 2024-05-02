// app/fonts.ts
import { Barlow } from 'next/font/google'
import { Poppins } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ["400", "600", "700"],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["400", "600", "700"],
})

export const fonts = {
  barlow,
  poppins
}