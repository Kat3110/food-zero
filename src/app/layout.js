import './globals.scss'

import {Header} from "@/components/header/Header";

export const metadata = {
  title: 'Food Zero',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <link rel='icon' href='orangeLink.svg'/>
      <meta name="description" content='Healthy food restaurant' />
      <body>
        <Header/>
        {children}
      </body>
    </html>)
}
