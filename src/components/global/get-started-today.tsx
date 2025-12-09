import { Button } from '@/components/ui/button';
import { app_config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GetStartedToday = () => {
  return (
    <div className='section-padding-x section-max-width py-12 md:py-24 flex flex-col md:flex-row gap-x-8 gap-y-12 justify-between items-center relative'>
      <div className='space-y-4 md:space-y-6 text-center md:text-left flex-1 relative z-20 flex-shrink-0'>
        <h2 className='section-heading-1'>
          Turn Your Data
          <br />
          Into Growth
        </h2>
        <Link href={app_config.panel} className='block'>
          <Button size={'lg'} variant={'secondary'}>
            Start Free Today
          </Button>
        </Link>
      </div>
      <div className='block flex-1 flex-shrink'>
        <Image
          src={'/images/misc/get-started-graph.webp'}
          alt='get-started-today'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-fit object-contain'
          // className='mx-auto md:mx-0 h-fit object-contain relative z-20 w-auto max-w-[700px]'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default GetStartedToday;
