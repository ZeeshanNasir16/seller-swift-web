import { Button } from '@/components/ui/button';
import React from 'react';

const BuildByExpert = () => {
  return (
    <div className='relative space-y-10 md:space-y-20 section-max-width section-padding-x py-14 md:py-20'>
      <h2 className='section-heading-1-secondary flex-shrink-0 text-center'>
        Build By Experts.
        <br />
        Backed by Experience.
      </h2>
      <div className='grid md:grid-cols-2 gap-8 mx-auto md:max-w-[90%]'>
        {/* <Image
            src='/images/misc/build-by-expert.png'
            alt='build-by-expert'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full object-contain'
          /> */}
        <div className='h-full w-full rounded-lg bg-[#D9D9D9] aspect-video' />
        <div className='space-y-8 py-6'>
          <p className='font-light'>
            Seller Swift was founded by seasoned leaders in eCommerce and
            fintech who set out to solve one of the biggest challenges online
            sellers face — accessing capital and insights fast enough to keep up
            with growth.
          </p>
          <p className='font-light'>
            Combining years of industry experience and a deep understanding of
            seller behavior, Seller Swift is building a smarter ecosystem where
            data, funding, and decision intelligence work together to help
            sellers scale with confidence.
          </p>
          <Button> Learn More on LinkedIn</Button>
        </div>
      </div>
    </div>
  );
};

export default BuildByExpert;
