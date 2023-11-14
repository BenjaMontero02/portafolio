import Header from '../components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Benjamin Montero</title>        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        <link rel="stylesheet" href="./globals.css" />
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
