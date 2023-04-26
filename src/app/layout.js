import './globals.css'

export const metadata = {
  title: "Dan's nextJs",
  description: 'My first nextJS app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
