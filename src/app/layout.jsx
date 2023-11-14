import Header from '../components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Benjamin Montero</title>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
