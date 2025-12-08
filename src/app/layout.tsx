import AppBgGraphics from '@/components/global/app-bg-graphic-lines';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/navbar';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const monaSans = localFont({
  src: [
    {
      path: '../fonts/Mona-Sans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-Light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-mona-sans',
});

const monaSansExpanded = localFont({
  src: [
    {
      path: '../fonts/Mona-Sans-LightWide.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-RegularWide.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-MediumWide.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-SemiBoldWide.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Mona-Sans-BoldWide.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-mona-sans-expanded',
});

export const metadata: Metadata = {
  title: 'Swift Seller',
  description:
    'Seller Swift delivers real-time analytics and AI insights to help eCommerce sellers make smarter decisions and scale faster.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${monaSans.variable} ${monaSansExpanded.variable} antialiased relative`}
      >
        <div className='bg-background text-foreground w-full'>
          <AppBgGraphics />
          <Navbar />
          <main className='min-h-dvh z-20 w-full overflow-hidden relative'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
