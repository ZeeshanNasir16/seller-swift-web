import { Button } from '@/components/ui/button';
import GrowthCardWrapper from '@/containers/products/driving-growth/growth-card';
import Testimonials from '@/containers/products/testimonials';
import Image from 'next/image';
import React from 'react';

const SmarterDecisionsFasterGrowthPage = () => {
  return (
    <>
      <section className='relative hero-top-padding bg-background text-foreground pb-40'>
        <div className='hero-bg-gradient-light-secondary' />
        <div className='hero-bg-gradient-light-secondary-overlay' />
        <div className='relative z-20 section-padding-x section-max-width'>
          <div className='w-full space-y-6'>
            <h2 className='heading-1-secondary text-gradient-tertiary-light w-full'>
              Smarter
              <br />
              Decisions
              <br />
              Faster Growth.
            </h2>
            <p className='text-sm sm:text-base md:text-lg max-w-[660px]'>
              Intelligently transform your store data into real-time analytics,
              profit tracking, and personalized growth strategies to scale
              confidently
            </p>
            <Button size='lg' variant='secondary'>
              Get Started Free
            </Button>
          </div>
          <div className='absolute top-1/2 -right-[370px] md:-right-[300px] lg:-right-[200px] -translate-y-1/2 aspect-square z-[16]'>
            <Image
              src='/images/gradients/cube-absrtract.png'
              alt='circle-glass'
              width={0}
              height={0}
              sizes='100%'
              className='w-[450px] h-[450px] aspect-square object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </section>
      <div className='bg-foreground text-background overflow-hidden relative z-20'>
        <section className='relative py-20 '>
          <div className='section-padding-x section-max-width relative z-20 space-y-12'>
            <h2 className='section-heading-1-secondary max-w-fit flex-shrink-0 text-center mx-auto'>
              See What’s Driving
              <br />
              Your Growth
            </h2>
            <div>
              <div className='grid lg:grid-cols-[35%_65%] gap-3 mb-3'>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/search.png'
                      alt='search'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl font-semibold'>
                      Performance Analytics
                    </h3>
                    <p className='text-lg leading-tight'>
                      Track revenue, profit, and order trends in one clean
                      dashboard
                    </p>
                  </div>
                </GrowthCardWrapper>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/bot.png'
                      alt='search'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl font-semibold'>
                      AI Co-Pilot
                    </h3>
                    <p
                      className='text-lg 
                 max-w-[50%] leading-tight'
                    >
                      Get personalized recommendations on performance and
                      revenue optimization
                    </p>
                  </div>
                  <Image
                    src='/images/misc/ai-chat-alt.png'
                    alt='ai-co-pilot'
                    width={0}
                    height={0}
                    sizes='100%'
                    className='block absolute right-0 top-1/2 -translate-y-1/2 object-contain w-fit h-full max-w-[50%] ml-auto pr-10'
                    loading='lazy'
                  />
                </GrowthCardWrapper>
              </div>
              <div className='grid lg:grid-cols-[65%_35%] gap-3'>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/edit.png'
                      alt='edit'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl font-semibold'>
                      Product Benchmarks
                    </h3>
                    <p className='text-lg max-w-[50%] leading-tight'>
                      Compare product margins, sales velocity, and performance
                      across categories
                    </p>
                  </div>
                  <Image
                    src='/images/misc/ai-insights.png'
                    alt='ai-insights'
                    width={0}
                    height={0}
                    sizes='100%'
                    className='absolute right-0 top-1/2 -translate-y-1/2 object-contain w-[40%] ml-auto h-full'
                    loading='lazy'
                  />
                </GrowthCardWrapper>
                <GrowthCardWrapper>
                  <div className='space-y-6'>
                    <Image
                      src='/images/misc/folder.png'
                      alt='folder'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl font-semibold leading-tight'>
                      Cash Flow Tracking
                    </h3>
                    <p className='text-lg leading-tight'>
                      Understand your payout cycles, expenses, and profit trends
                    </p>
                  </div>
                </GrowthCardWrapper>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <div className='absolute inset-0 backdrop-blur-lg z-[14]'>
          <div
            className='absolute z-[13] top-1/2 -translate-y-1/2 w-full aspect-video'
            style={{
              background:
                'radial-gradient(at 60% 100%, #000 45%, rgba(157, 78, 221, 0.40) 64%, rgba(238, 130, 238, 0) 72%)',
            }}
          />
          <div
            className='absolute z-[14] bottom-0 w-full aspect-video'
            style={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 1) 55%, rgba(0, 188, 212, 0) 100%)',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SmarterDecisionsFasterGrowthPage;
