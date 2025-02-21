import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nomad Energy - Solar Solutions",
  description: "Sustainable solar energy solutions for businesses and agriculture",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

