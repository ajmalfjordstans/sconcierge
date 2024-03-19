import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin']
})

export const metadata = {
  title: 'Signature Concierge',
  description: 'Welcome to Signature Concierge DMC, where every journey is a crafted master piece and every experience is tailored to exceed your expectations.',
  icons: {
    icon: "/icons/logo_2.png",
    apple: "/icons/logo_2.png",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
