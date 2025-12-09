import { Button } from '@/components/ui/button';
import GrowthCardWrapper from '@/containers/products/driving-growth/growth-card';
import InsightCard from '@/containers/products/misc/insight-card';
import Testimonials from '@/containers/products/testimonials';
import Image from 'next/image';
import React from 'react';

import { app_config } from '@/config';
import InsightsToImpact from '@/containers/products/insights-to-impact.tsx';
import '@/containers/products/styles.css';
import Link from 'next/link';

const SmarterDecisionsFasterGrowthPage = () => {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='hero-bg-gradient-light-secondary' />
        <div className='hero-bg-gradient-light-secondary-overlay' />
        <div className='relative z-20 section-padding-x section-max-width overflow-visible hero-padding'>
          <div className='w-full space-y-6 md:space-y-10 md:max-w-[500px] lg:max-w-fit'>
            <h2 className='heading-1-secondary text-gradient-tertiary-light'>
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
            <Link
              href={app_config.panel}
              className='block w-full max-w-[450px]'
            >
              <Button size='lg' className='w-full'>
                Get Started Free
              </Button>
            </Link>
          </div>
          <div className='hidden md:block absolute top-1/2 -right-[70%] md:-right-[350px] xl:-right-[20%] 2xl:-right-[300px] -translate-y-1/2 aspect-square z-[16] h-[80%]'>
            <Image
              src='/images/gradients/circle-glass.webp'
              alt='circle-glass'
              width={0}
              height={0}
              sizes='100%'
              className='object-contain w-full h-full'
              loading='lazy'
            />
          </div>
        </div>
      </section>
      <div className='relative z-20'>
        <section className='relative py-10 md:py-20 overflow-visible'>
          <div className='section-padding-x section-max-width relative z-20 space-y-12'>
            <h2 className='section-heading-1-secondary max-w-fit flex-shrink-0 text-center mx-auto'>
              See What’s Driving
              <br />
              Your Growth
            </h2>
            <div className='text-background'>
              <div className='grid lg:grid-cols-[35%_65%] gap-3 mb-3'>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/search.webp'
                      alt='search'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-semibold'>
                      Performance Analytics
                    </h3>
                    <p className='text-lg 2xl:text-xl leading-tight'>
                      Track revenue, profit, and order trends in one clean
                      dashboard
                    </p>
                  </div>
                </GrowthCardWrapper>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/bot.webp'
                      alt='search'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-semibold'>
                      AI Co-Pilot
                    </h3>
                    <p
                      className='text-lg 2xl:text-xl 
                 sm:max-w-[50%] leading-tight'
                    >
                      Get personalized recommendations on performance and
                      revenue optimization
                    </p>
                  </div>
                  <Image
                    src='/images/misc/ai-chat-alt.webp'
                    alt='ai-co-pilot'
                    width={0}
                    height={0}
                    sizes='100%'
                    className='hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 object-contain w-fit h-full max-w-[50%] ml-auto pr-10'
                    loading='lazy'
                  />
                </GrowthCardWrapper>
              </div>
              <div className='grid lg:grid-cols-[65%_35%] gap-3'>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/edit.webp'
                      alt='edit'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-semibold'>
                      Product Benchmarks
                    </h3>
                    <p className='text-lg 2xl:text-xl sm:max-w-[50%] leading-tight'>
                      Compare product margins, sales velocity, and performance
                      across categories
                    </p>
                  </div>
                  <Image
                    src='/images/misc/ai-insights.webp'
                    alt='ai-insights'
                    width={0}
                    height={0}
                    sizes='100%'
                    className='hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 object-contain w-[40%] ml-auto h-full'
                    loading='lazy'
                  />
                </GrowthCardWrapper>
                <GrowthCardWrapper>
                  <div className='space-y-1 md:space-y-4'>
                    <Image
                      src='/images/misc/folder.webp'
                      alt='folder'
                      width={0}
                      height={0}
                      sizes='100%'
                      className='w-12 md:w-20 h-20 object-contain'
                      loading='lazy'
                    />
                    <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-semibold'>
                      Cash Flow Tracking
                    </h3>
                    <p className='text-lg 2xl:text-xl leading-tight'>
                      Understand your payout cycles, expenses, and profit trends
                    </p>
                  </div>
                </GrowthCardWrapper>
              </div>
            </div>
          </div>
          <div className='absolute inset-0 z-[12]'>
            <Image
              src={'/images/gradients/gradient-4.webp'}
              alt='img'
              fill
              loading='lazy'
            />
          </div>
        </section>
        <InsightsToImpact />
        <section className='relative z-20 overflow-clip -mt-px pb-10'>
          <div className='hidden md:block absolute top-0 xl:left-[-170px] md:-left-[230px] left-[-300px] aspect-square z-[15]'>
            <Image
              src='/images/gradients/abstract-glass.webp'
              alt='circle-glass'
              width={0}
              height={0}
              sizes='100%'
              className='abstract-side-image rotate-[250deg]'
              loading='lazy'
            />
          </div>
          <Testimonials />
        </section>
      </div>
    </>
  );
};

export default SmarterDecisionsFasterGrowthPage;
