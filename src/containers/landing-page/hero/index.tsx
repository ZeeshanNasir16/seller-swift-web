import { Button } from '@/components/ui/button';
import { app_config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './styles.css';

const LandingHeroSection = () => {
  return (
    <div className='relative h-full min-h-[100dvh] overflow-y-hidden hero-padding !pb-0'>
      <div className='section-padding-x space-y-8 z-40 relative'>
        <h2 className='heading-1-secondary text-gradient-tertiary-light text-center'>
          Smarter Decisions. <br /> Faster Growth.
        </h2>
        <p className='text-center text-base lg:text-lg xl:text-xl font-normal max-w-[775px] mx-auto '>
          Seller Swift — with AI Co-Pilot — gives you real-time analytics,
          growth benchmarks, and intelligent recommendations to scale your store
          with confidence.
        </p>
        <div className='flex justify-center items-center gap-4'>
          <Link href={app_config.panel} className='block'>
            <Button size='lg'>Get Started Free</Button>
          </Link>
          <Link href={'/contact-us'} className='block'>
            <Button size='lg' variant='secondary'>
              Learn More
            </Button>
          </Link>
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
