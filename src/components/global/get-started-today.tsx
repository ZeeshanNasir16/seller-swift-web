import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const GetStartedToday = () => {
  return (
    <div className='section-padding-x section-max-width py-12 md:py-24 flex flex-col md:flex-row gap-x-8 gap-y-12 justify-between items-center relative'>
      <div className='space-y-4 md:space-y-6 text-center md:text-left md:min-w-[340px] md:max-w-[480px] md:flex-1 relative z-20'>
        <h2 className='section-heading-1 max-w-[12ch] mx-auto md:mx-0'>
          Turn Your Data Into Growth
        </h2>
        <p className='text-base max-w-[35ch] mx-auto md:mx-0 text-center md:text-left'>
          Join now, grow smarter, and get ready for the next evolution of seller
          finance.
        </p>
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
        className='mx-auto md:mx-0 sm:w-[80%] md:w-full h-full object-contain aspect-video md:object-right md:min-w-[350px] md:max-w-[650px] md:flex-1 relative z-20'
        loading='lazy'
      />
    </div>
  );
};

export default GetStartedToday;
