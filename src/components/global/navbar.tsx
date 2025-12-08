'use client';
import LinkButton, { LINK_BTN_STYLES } from '@/components/global/link-button';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import Logo from './logo';
import MobileNavSheet from './mobile-nav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='absolute top-4 md:top-8 left-0 right-0 z-50 w-full max-w-[840px] xl:max-w-[900px] mx-auto inline-flex justify-center px-6'>
      <div className='w-full backdrop-blur-sm bg-[#020202]/15 text-white border border-white/15 rounded-sm inline-flex justify-between gap-6 items-center p-3 md:p-4'>
        <Logo className='h-8 md:h-10 flex-shrink-0' />
        <div className='items-center gap-6 hidden md:inline-flex'>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className='flex items-center gap-1.5'>
              <p className={LINK_BTN_STYLES}>Products</p>
              <ChevronDown
                className={cn(
                  'size-4 transition-transform',
                  isOpen && 'rotate-180'
                )}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='start'>
              <DropdownMenuItem asChild>
                <LinkButton
                  href='/products/smarter-decisions-faster-growth'
                  onClick={() => setIsOpen(false)}
                >
                  Smarter Decisions Faster Growth
                </LinkButton>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <LinkButton
                  href='/products/insights-today-funding-tommorrow'
                  onClick={() => setIsOpen(false)}
                >
                  Insights Today Funding Tomorrow
                </LinkButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <LinkButton href='/about-us'>About Us</LinkButton>
          <LinkButton href='/contact-us'>Contact Us</LinkButton>
          <LinkButton href='/user-agreement'>User Agreement</LinkButton>
        </div>
        <div className='flex-shrink-0 flex items-center gap-3'>
          <Button size='sm'>Request a Demo</Button>
          <MobileNavSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
