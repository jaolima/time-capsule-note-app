import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
/* 
----------------
next/font/google
----------------
O next font evita o Layout Shift , que é o efeito que algumas paginas tem de mostrar a 
fonte padrão e depois trocar para a fonte que você escolheu.
 */
import {Roboto_Flex as Roboto, Bai_Jamjuree as BaiJanjuree} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const baiJamjuree = BaiJanjuree({
   subsets: ['latin'], 
   weight: '700',
   variable: '--font-bai-jamjuree'
  })

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo para o seu futuro, constrída com react e tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
