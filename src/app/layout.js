import Header from './components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Benjamin Montero</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono"></link>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
