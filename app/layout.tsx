// app/layout.tsx
import './globals.css'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={poppins.className + ' bg-white text-ink'}>
        {children}
      </body>
    </html>
  )
}