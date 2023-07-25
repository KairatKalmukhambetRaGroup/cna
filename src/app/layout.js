import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
export const metadata = {
  title: 'CNA - Центр Недвижимости Аркалык'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
          {children}
      </body>
    </html>
  )
}
