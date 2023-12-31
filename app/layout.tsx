import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Christopher Fok',
    description: 'Christopher Fok\'s website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="flex flex-col md:flex-row m-20 gap-20">

            <div className="flex flex-col flex-initial md:w-[25%]">
                <Link href="/">
                    <p className="text-2xl mb-5">Christopher Fok</p>
                </Link>
                <Link href="/lists"><p>Lists</p></Link>
                <Link href="/writings"><p>Writings</p></Link>
            </div>

            <div className="flex flex-col flex-1">
                {children}
            </div>

        </main>
        </body>
        </html>
    )
}
