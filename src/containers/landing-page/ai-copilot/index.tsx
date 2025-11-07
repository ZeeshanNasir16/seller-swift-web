import InsightCard from '@/containers/landing-page/ai-copilot/insight-card';
import Image from 'next/image';
import React from 'react';

const AICopilot = () => {
  return (
    <div className='md:mt-32 mt-16'>
      <div className='section-max-width section-padding-x space-y-8 z-20 relative -mb-28'>
        <h2 className='section-heading-1 text-gradient-primary text-center font-secondary'>
          Your AI Co-Pilot for
          <br />
          E-Commerce Growth
        </h2>
        <p className='max-w-[700px] mx-auto text-center text-sm sm:text-base md:text-lg font-normal'>
          Go beyond dashboards — Seller Swift AI Co-Pilot delivers personalized,
          data-driven recommendations to optimize performance, manage cash flow,
          and accelerate sustainable growth
        </p>
        <div className='relative w-[80%] mx-auto'>
          <Image
            src='/images/misc/app-panel-2.png'
            alt='round-eclipse'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-fit object-contain z-20 relative'
            loading='lazy'

          />
        </div>
        <div className='absolute top-0 xl:left-[-100px] md:-left-[250px] left-[-300px] aspect-square z-[15]'>
          <Image
            src='/images/gradients/circle-glass.png'
            alt='circle-glass'
            width={0}
            height={0}
            sizes='100%'
            className='w-[370px] h-[370px] aspect-square object-cover'
          />
        </div>
      </div>
      {/* insights */}
      <div
        className='py-10 md:py-20 mx-6 rounded-t-lg z-20 relative backdrop-blur-lg'
        style={{
          background:
            'linear-gradient(180deg, rgba(244, 244, 244, 0.08) 0%, rgba(0, 1, 2, 0) 100%)',
        }}
      >
        <div className='section-max-width section-padding-x relative z-[25]'>
          <div className='flex flex-col md:flex-row gap-12 justify-between items-center'>
            <h2 className='section-heading-1 text-gradient-primary'>
              Insights Today.
              <br />
              Funding Tommorrow.
            </h2>
            <p className='text-base font-normal max-w-[455px]'>
              Seller Swift Advance is the next evolution of eCommerce growth —
              instant funding built on your Insights foundation. Gain early
              access by joining today, and turn your store’s performance into
              capital that fuels your next stage of growth.
            </p>
          </div>
          <div className='grid md:grid-cols-[1fr_150px_1fr] lg:grid-cols-[minmax(300px,470px)_minmax(250px,1fr)_minmax(300px,470px)] mt-32'>
            <InsightCard
              title=' Get Started with Insights'
              tagline='Start free and build the foundation for funding readiness.'
              description='Connect your store, unlock your data, and see how Seller Swift helps you identify growth potential across products, markets, and margins.'
            />
            <div className='relative w-full'>
              <Image
                src='/images/misc/link.svg'
                alt='link'
                width={0}
                height={0}
                sizes='100%'
                className='w-full h-full object-contain z-20 relative hidden md:block'
                loading='lazy'
              />
              <Image
                src='/images/misc/link-mob.svg'
                alt='link'
                width={0}
                height={0}
                sizes='100%'
                className='w-fit h-full max-h-[180px] mx-auto object-contain z-20 relative  md:hidden'
                loading='lazy'
              />
            </div>
            <InsightCard
              title='Be First in Line for Advance'
              tagline='Turn insights into capital — and growth into momentum.'
              description='When Seller Swift Advance launches, you’ll be among the first to access instant funding powered by your own performance data.'
            />
          </div>
          <div className='absolute -top-[21rem] xl:right-[-270px] md:-right-[250px] right-[-290px] aspect-square z-[25]'>
            <Image
              src='/images/gradients/abstract-glass.png'
              alt='abstract-glass'
              width={0}
              height={0}
              sizes='100%'
              className='w-[370px] h-[370px] aspect-square object-cover'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
