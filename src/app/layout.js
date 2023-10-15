import Header from './components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
