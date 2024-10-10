// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'



export const metadata = {
  title: 'MedicalHunt - Neet Analysis Platform',
  description: 'User Signup Page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}  </body>
    </html>
  )
}


