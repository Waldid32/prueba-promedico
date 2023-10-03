import './globals.css'

export const metadata = {
  title: 'Prueba Promedico',
  description: 'Prueba Promedico realizada por Waldid Barrios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
