import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import './styles.css';

const LandingHeroSection = () => {
  return (
    <div className='relative hero-top-padding h-full min-h-[100dvh]'>
      <div className='max-w-[110ch] mx-auto section-padding-x space-y-8 z-40 relative'>
        <h2 className='heading-1 text-center'>
          Smarter Decisions. Faster Growth.
        </h2>
        <p className='text-center text-base lg:text-lg font-normal'>
          Seller Swift — with AI Co-Pilot — gives you real-time analytics,
          growth benchmarks, and intelligent recommendations to scale your store
          with confidence.
        </p>
        <div className='flex justify-center items-center gap-4'>
          <Button size='lg'>Get Started Free</Button>
          <Button size='lg' variant='secondary'>
            Learn More
          </Button>
        </div>
      </div>
      <Image
        src='/images/misc/app-panel-1.png'
        alt='round-eclipse'
        width={0}
        height={0}
        sizes='100%'
        className='w-full h-fit object-contain z-20 relative mt-20 section-max-width'
      />
      <div className='centered-round-eclipse' />
      <div className='round-eclipse-overlay' />
      <div className='absolute bottom-[40%] translate-y-1/2 z-[14]'>
        <Image
          src='/images/misc/twist.png'
          alt='round-eclipse'
          width={0}
          height={0}
          sizes='100%'
          className='w-full h-fit aspect-video object-cover z-[14] relative'
        />
      </div>
    </div>
  );
};

export default LandingHeroSection;
