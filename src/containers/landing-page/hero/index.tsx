import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import './styles.css';

const LandingHeroSection = () => {
  return (
    <div className='relative hero-top-padding h-full min-h-[100dvh] overflow-y-hidden'>
      <div className='section-padding-x space-y-8 z-40 relative py-6 md:py-9'>
        <h2 className='heading-1 text-center'>
          Smarter Decisions. <br /> Faster Growth.
        </h2>
        <p className='text-center text-base lg:text-lg xl:text-xl font-normal max-w-[775px] mx-auto '>
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
        width={1920}
        height={1080}
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px'
        className='w-full h-auto object-contain z-20 relative mt-20 section-max-width'
      />
      <div className='centered-round-eclipse' />
      <div className='round-eclipse-overlay' />
      <div className='absolute top-[60%] -translate-y-1/2 z-[14]'>
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
