import { lato } from "./fonts"
import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "Doomlings Score Tracker",
  description: "Track player scores across multiple games of Doomlings.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
