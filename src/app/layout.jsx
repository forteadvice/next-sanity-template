import '../styles/globals.css'

export default async function BaseLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
