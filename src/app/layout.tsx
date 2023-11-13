import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar';
import SocialSideBar from '@/components/SocialSideBar';
import Footer from '@/components/Footer';
import Head from 'next/head';

import '../styles/navBar.css'
import '../styles/home.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mostafizur Rahman - Fullstack Web Developer',
  description: 'Portfolio of Mostafizur Rahman, a Fullstack Web Developer showcasing skills and projects.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="px-12 min-h-screen bg-gray-200" style={{ paddingBottom: '120px' }}>
          <NavBar />
          <SocialSideBar />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

