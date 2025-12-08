'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import OurValuesCard from '@/containers/about-us/our-vaues/our-value-card';
import { whyUs } from '@/containers/landing-page/why-seller-swift/data';
import { cn } from '@/lib/utils';
import AutoPlay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React, { useRef } from 'react';

const OurValues = () => {
  const autoplayPlugin = useRef(
    AutoPlay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className='relative pt-10 md:pt-20 pb-40'>
      <div className='absolute inset-[-5%_-5%_-10%_-3%] blur-2xl'>
        <Image
          src={'/images/gradients/gradient-3.png'}
          alt='img'
          fill
          className='scale-y-[-1]'
          loading='eager'
        />
      </div>
      <div className='section-padding-x space-y-12 relative z-20 text-white max-w-screen-2xl mx-auto overflow-visible'>
        <h2 className='section-heading-1-secondary text-center '>Our Values</h2>
        <div className='relative'>
          <Carousel
            className='w-full h-fit'
            plugins={[autoplayPlugin.current]}
            opts={{ loop: true, align: 'start' }}
          >
            <CarouselContent>
              {whyUs.map((item, idx) => (
                <CarouselItem
                  className={cn(
                    'basis-full sm:basis-1/2 lg:basis-1/4 select-none',
                    idx % 2 === 0 ? 'relative' : 'md:mt-8'
                  )}
                  key={item.id}
                >
                  <OurValuesCard {...item}/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className='absolute inset-0 z-[15] bg-gradient-to-b from-black via-black/90 to-transparent w-full h-full' />
    </section>
  );
};

export default OurValues;
