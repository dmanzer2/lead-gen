import './globals.css'
import '../styles/custom.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Source Trusted Pros for Smart Home Installations in Phoenix',
  description: 'Professionally installed smart home systems in Mesa, Scottsdale, Paradise Valley, Gilbert, Queen Creek, and the East Valley. Enjoy seamless control of lighting, climate, security, and entertainment—making your Arizona home more secure, convenient, and energy efficient.',
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
