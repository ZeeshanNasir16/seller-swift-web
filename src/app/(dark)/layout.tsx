import AppBgGraphics from '@/components/global/app-bg-graphic-lines';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/navbar';
import React from 'react';

const DarkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-background text-foreground w-full'>
      {/* <AppBgGraphics /> */}
      <Navbar />
      <main className='min-h-dvh z-20 w-full overflow-x-hidden'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DarkLayout;
