import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerador de Posts Instagram',
  description: 'Crie posts incríveis para o Instagram com facilidade!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {session && <Navigation />}
        {children}
      </body>
    </html>
  )
}

