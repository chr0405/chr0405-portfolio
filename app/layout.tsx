import "../styles/global.css"
import { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"

// public 디렉토리의 이미지 경로를 지정
const faviconUrl = "/star_favicon.png";

export const metadata: Metadata = {
  title: {
    template: "CHR portfolio",
    default: "CHR portfolio",
  },
  icons: { 
    icon: faviconUrl,
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}