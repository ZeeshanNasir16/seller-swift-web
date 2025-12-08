'use client';
import { Button } from '@/components/ui/button';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { testimonials } from '@/containers/landing-page/testimonials/data';
import AutoPlay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleNext = () => api?.scrollTo(current + 1);
  const handlePrevious = () => api?.scrollTo(current - 1);

  return (
    <div className='relative section-padding-x section-max-width z-20 py-10 md:py-20'>
      <h2 className='section-heading-1 text-center mb-12'>
        Seller Swift Testimonials
      </h2>
      <div className='max-w-[1680px] mx-auto grid md:grid-cols-[minmax(200px,20%)_1fr] lg:grid-cols-[minmax(300px,30%)_1fr] gap-12 h-fit'>
        <div className='relative hidden md:block self-center'>
          <div className='rounded-full border border-secondary relative aspect-square flex items-center justify-center'>
            <Image
              src='/images/social/quote.svg'
              alt='quote'
              width={0}
              height={0}
              sizes='100%'
              className='w-14 h-14 object-contain aspect-square'
              loading='eager'
            />
            <Image
              src={testimonials[current].image}
              alt='quote'
              width={0}
              height={0}
              sizes='100%'
              className='rounded-full w-20 h-20 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 object-cover object-top-center aspect-square absolute bottom-0 right-0'
              loading='eager'
            />
          </div>
        </div>
        <div className='w-full flex'>
          <div className='space-y-8 self-center'>
            <p className='text-sm md:text-base text-primary uppercase font-medium'>
              What They Say
            </p>
            <Carousel
              className='w-full h-fit'
              setApi={setApi}
              plugins={[AutoPlay({ delay: 4000 })]}
              opts={{ loop: false }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => {
                  return (
                    <CarouselItem
                      className=' basis-full select-none flex'
                      key={index}
                    >
                      <p className='text-lg md:text-xl lg:text-[26px] font-medium font-secondary !leading-relaxed'>
                        "{testimonial.comment}"
                      </p>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
            <div className='flex justify-between items-center'>
              <div className='space-y-0.5'>
                <p className='text-sm md:text-base text-primary uppercase font-medium'>
                  {testimonials[current].name}
                </p>
                <p className='text-base md:text-lg'>
                  {testimonials[current].designation}
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <Button
                  size='icon'
                  variant='outline'
                  onClick={handlePrevious}
                  className='w-12 h-12 xl:w-16 xl:h-16'
                >
                  <ChevronLeft className='!size-4 xl:!size-5' />
                </Button>
                <Button
                  size='icon'
                  variant='outline'
                  onClick={handleNext}
                  className='w-12 h-12 xl:w-16 xl:h-16'
                >
                  <ChevronRight className='!size-4 xl:!size-5' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
