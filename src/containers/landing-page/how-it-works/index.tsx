import { Button } from '@/components/ui/button';
import { connectYourStore } from '@/containers/landing-page/how-it-works/data';
import WorkCardWrapper from '@/containers/landing-page/how-it-works/work-card-wrapper';
import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
  return (
    <div className='relative space-y-20 mt-10 md:mt-24'>
      <div className='relative space-y-12 section-max-width section-padding-x'>
        <h2 className='section-heading-1 text-gradient-primary text-center'>
          How It Works
        </h2>
        <div className='grid lg:grid-cols-2 gap-6 relative'>
          <WorkCardWrapper className='flex flex-col justify-between h-full gap-2'>
            <div className='inset-0 absolute aspect-square z-[11] bg-gradient-to-tr from-transparent via-transparent to-gray-400/15 w-full h-full' />
            <div className='grid gap-3 grid-cols-4 grid-rows-2 max-w-[400px] mx-auto mb-12 flex-1'>
              {connectYourStore.map((item, idx) => {
                const colPlacement =
                  idx === 0
                    ? 'col-span-1 row-span-1'
                    : idx === 1
                    ? 'col-span-1 row-span-1 col-start-2 row-start-2'
                    : idx === 2
                    ? 'col-span-1 row-span-1 col-start-4 row-start-2'
                    : 'col-span-1 row-span-1 col-start-3';
                return (
                  <div className={colPlacement} key={item.id}>
                    <div className='rounded-full bg-white p-4 lg:w-20 h-20 aspect-square'>
                      <Image
                        src={item.image}
                        alt={item.id}
                        width={0}
                        height={0}
                        sizes='100%'
                        className='h-full w-full object-contain'
                        loading='eager'
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='space-y-3'>
              <h3 className='section-heading-2 text-gradient-secondary '>
                Connect Your Store
              </h3>
              <p className='text-base font-normal sm:max-w-[37ch]'>
                Connect your Amazon, TikTok, or Shopify account in just a few
                clicks.
              </p>
            </div>
          </WorkCardWrapper>
          <WorkCardWrapper className='flex flex-col justify-between h-full gap-2'>
            <div className='inset-0 absolute aspect-square bg-gradient-to-bl from-transparent via-transparent to-gray-400/15 h-full w-full' />
            <div className='relative w-full h-fit aspect-video'>
              <Image
                src={'/images/misc/insights-chart.png'}
                alt='seller-swift-logo'
                width={0}
                height={0}
                sizes='100%'
                className='w-full h-full object-contain'
                loading='eager'
              />
            </div>
            <div className='space-y-3'>
              <h3 className='section-heading-2 text-gradient-secondary '>
                Onlock Insights Instantly
              </h3>
              <p className='text-base font-normal sm:max-w-[37ch]'>
                Track revenue trends, product performance, and category
                benchmarks in real time
              </p>
            </div>
          </WorkCardWrapper>
          <WorkCardWrapper className='md:col-span-2'>
            <div className='inset-0 absolute aspect-square bg-gradient-to-tl from-transparent via-transparent to-gray-400/15 w-full h-full' />
            <div className='inset-0 absolute aspect-square bg-gradient-to-br from-transparent via-transparent to-gray-400/15 w-full h-full' />
            <div className='space-y-6'>
              <div className='flex flex-col md:flex-row gap-12 justify-between'>
                <div className='space-y-6'>
                  <h3 className='section-heading-2 text-gradient-secondary w-[9ch] break-words'>
                    Grow With AI Co-Pilot
                  </h3>
                  <p className='text-base font-normal sm:max-w-[37ch]'>
                    Get tailored recommendations to optimize inventory, improve
                    sales velocity, and plan smarter for the next payout cycle.
                  </p>
                  <Button size={'lg'}>Get Started Free</Button>
                </div>
                <Image
                  src={'/images/misc/ai-chat.png'}
                  alt='chat-1'
                  width={0}
                  height={0}
                  sizes='100%'
                  className='md:l-auto w-full md:w-fit aspect-video max-h-[300px] object-contain object-right'
                  loading='lazy'
                />
              </div>
            </div>
          </WorkCardWrapper>
          <div
            className='absolute inset-0 z-[5]'
            style={{
              background:
                'radial-gradient(circle,hsl(var(--primary) / 0.3) 0%, transparent 60%)',
            }}
          />
        </div>
        <div className='absolute top-0 -right-[340px] aspect-square z-20'>
          <Image
            src='/images/gradients/circle-glass.png'
            alt='circle-glass'
            width={0}
            height={0}
            sizes='100%'
            className='w-[370px] h-[370px] aspect-square object-cover'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
