import './globals.css'
import '../styles/custom.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smart Home Installation Experts in Phoenix & East Valley',
  description: 'Find trusted smart home installation pros in Phoenix, Mesa, Queen Creek, San Tan Valley, and the East Valley. Get expert setup for lighting, security, and home automation—fast and reliable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
