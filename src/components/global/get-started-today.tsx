import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const GetStartedToday = () => {
  return (
    <div className='section-padding-x section-max-width py-12 md:py-24 flex flex-col md:flex-row gap-x-8 gap-y-12 justify-between items-center relative'>
      <div className='space-y-4 md:space-y-6 text-center md:text-left md:flex-1 relative z-20 flex-shrink-0'>
        <h2 className='section-heading-1'>
          Turn Your Data
          <br />
          Into Growth
        </h2>
        <Button size={'lg'} variant={'secondary'}>
          Start Free Today
        </Button>
      </div>
      <Image
        src={'/images/misc/get-started-graph.png'}
        alt='get-started-today'
        width={0}
        height={0}
        sizes='100%'
        className='mx-auto md:mx-0 sm:w-[80%] md:w-full h-fit object-contain md:flex-1 relative z-20 w-full max-w-[700px]'
        loading='lazy'
      />
    </div>
  );
};

export default GetStartedToday;
