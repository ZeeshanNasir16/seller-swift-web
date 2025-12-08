'use client';
import LinkButton from '@/components/global/link-button';
import Logo from '@/components/global/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import React from 'react';

const MobileNavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant={'secondary'} className='md:hidden'>
          <MenuIcon className='!size-3' />
          <span className='hidden md:inline'>Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle className='hidden'>Swift Seller</SheetTitle>
        </SheetHeader>
        <div className='flex overflow-y-auto overflow-x-hidden flex-col flex-grow gap-16 h-full hide-scrollbar'>
          <Logo withText isIcon className='h-16' />
          <div className='flex-1 space-y-6'>
            <LinkButton href='/' className='text-lg'>
              Home
            </LinkButton>
            <LinkButton
              href='/products/smarter-decisions-faster-growth'
              className='text-lg'
            >
              Advance
            </LinkButton>
            <LinkButton
              href='/products/insights-today-funding-tommorrow'
              className='text-lg'
            >
              Insights
            </LinkButton>
            <LinkButton href='/about-us' className='text-lg'>
              About Us
            </LinkButton>
          </div>
          <div className='flex gap-1.5 items-center text-muted-foreground'>
            <LinkButton href={'/privacy-policy'} className='text-sm '>
              Privacy Policy
            </LinkButton>{' '}
            |
            <LinkButton href={'/user-agreement'} className='text-sm'>
              User Agreement
            </LinkButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
