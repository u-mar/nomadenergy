import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Toaster } from '@/components/ui/sonner'
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
        <Toaster/>
        {children}
        <Footer />
      </body>
    </html>
  )
}

