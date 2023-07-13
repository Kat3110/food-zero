import './globals.css'
// import {Inter} from 'next/font/google'
import {Header} from "@/components/header/Header";

// const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Food Zero',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <link rel='icon' href='orangeLink.svg'/>

    <body>
    <Header/>
    {children}
    </body>

    </html>)
}
