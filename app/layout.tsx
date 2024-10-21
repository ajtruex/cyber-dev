import { Inter } from "next/font/google"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CYBER_DEV Portfolio",
  description: "A retro-futuristic web developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gray-900 text-cyan-300 font-mono p-4  relative`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="scanlines" />
        <div className="container mx-auto relative z-10">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
