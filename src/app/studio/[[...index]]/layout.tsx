import './studio.css'

export default async function BaseLayout({ children }: any) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
