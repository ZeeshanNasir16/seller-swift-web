import Footer from '@/components/global/footer';
import Navbar from '@/components/global/navbar';
import React from 'react';

const LightThemeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-foreground text-background'>
      <Navbar />
      <main className='min-h-dvh z-20'>{children}</main>
      <Footer />
    </div>
  );
};

export default LightThemeLayout;
