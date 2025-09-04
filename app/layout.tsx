import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Arvo, Noto_Sans_JP } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const arvo = Arvo({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-arvo" })
const noto = Noto_Sans_JP({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-noto" })

export const metadata: Metadata = {
  title: "SpinMint",
  description: "Spin your profile, mint your NFT",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${arvo.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
