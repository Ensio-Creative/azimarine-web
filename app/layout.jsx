import './globals.css'

export const metadata = {
  title: 'Azimarine',
  description: 'We are committed to providing services and solutions that meet the growing demand across different sectors where we operate.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
