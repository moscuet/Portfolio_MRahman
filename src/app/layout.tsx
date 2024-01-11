import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import '../styles/navBar.css'
import '../styles/home.css'
import SocialMediaIcons from '@/components/SocialSideBar';
import { Toaster } from '@/components/ui/ToastNotification';

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

        <div className="pl-6 pr-3 sm:px-12 min-h-screen bg-gray-200">
          <Toaster position='bottom-right' />
          <NavBar />
          <SocialMediaIcons className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 p-1 sm:p-2 md:p-4" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

