import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const nanumGothic = Nanum_Gothic({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'next tutorials',
  description:
    'react server component와 next js 13의 app router 를 tutorial을 통해 학습해봐요!',
  icons: {
    icon: '/vercel.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={nanumGothic.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
