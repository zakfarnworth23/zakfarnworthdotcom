import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Member of the House of Lords | Official Portfolio",
  description: "Official portfolio website for a Member of the House of Lords",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <h1 className="text-3xl md:text-4xl font-bold">About</h1>
         <p className="text-lg md:text-xl mt-2">Professional background and experience</p>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

