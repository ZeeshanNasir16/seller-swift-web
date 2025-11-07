'use client';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/navbar';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDarkMode = pathname === '/';
  return (
    <div
      className={cn(
        'bg-foreground text-background',
        isDarkMode && 'bg-background text-foreground'
      )}
    >
      <Navbar />
      <main className='min-h-dvh z-20'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
