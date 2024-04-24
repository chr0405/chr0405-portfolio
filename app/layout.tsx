import "../styles/global.css"
import { Metadata } from "next"
import Header from "../components/Header"

export const metadata : Metadata= {
  title: {
    template : "CHR portfolio",
    default : "CHR portfolio",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}