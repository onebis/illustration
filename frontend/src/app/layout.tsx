import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer"

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'illustration',
    description: 'post illustration',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ja">
        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
