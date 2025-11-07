import { FooterGradientbg } from '@/components/gradients/footer-bg';
import { Button } from '@/components/ui/button';
import {
  whyChooseSellerSwift,
  whyUs,
} from '@/containers/landing-page/why-seller-swift/data';
import WhyBenefitCard from '@/containers/landing-page/why-seller-swift/why-benefit-card';
import { howItWorks } from '@/containers/products/how-it-works/data';
import HowItWorksCard from '@/containers/products/how-it-works/how-it-works-card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const InsightsTodayFindingTommorrowPage = () => {
  return (
    <>
      <section className='relative hero-top-padding bg-background text-foreground pb-40'>
        <div className='hero-bg-gradient-light-secondary' />
        <div className='hero-bg-gradient-light-secondary-overlay' />
        <div className='relative z-20 section-padding-x section-max-width'>
          <div className='w-full space-y-6'>
            <h2 className='heading-1-secondary text-gradient-tertiary-light w-full'>
              Insights
              <br />
              Today Funding
              <br />
              Tomorrow.
            </h2>
            <p className='text-sm sm:text-base md:text-lg max-w-[660px]'>
              Access working capital faster — powered by your own performance
              data and the Seller Swift ecosystem built for intelligent growth.
            </p>
            <Button size='lg' variant='secondary'>
              Join the Waitlist
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
      <div className='relative bg-foreground text-background'>
        <section className='relative py-20'>
          <div className='section-padding-x section-max-width relative z-20 space-y-12'>
            <div className='space-y-6'>
              <h2 className='section-heading-1-secondary max-w-fit flex-shrink-0 text-center mx-auto'>
                How It Works
              </h2>
              <p className='text-base md:text-lg font-normal text-center'>
                Fast Transparent Tailored Funding
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
              {howItWorks.map((item, idx) => (
                <HowItWorksCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  className={cn(idx % 2 === 0 && 'top-16')}
                />
              ))}
            </div>
          </div>
        </section>
        <section className='relative z-20 text-white'>
          <div className='section-max-width section-padding-x space-y-12 py-10 md:py-20 relative z-20'>
            <div className='space-y-6'>
              <h2 className='section-heading-1-secondary text-center'>
                Why Choose Seller
                <br />
                Swift Advance
              </h2>
              <p className='text-base md:text-lg font-normal text-center'>
                Funding That Learns With You
              </p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {whyChooseSellerSwift.map((item, idx) => (
                <div
                  className={cn(idx % 2 === 0 ? 'relative' : 'mt-12')}
                  key={item.id}
                >
                  <WhyBenefitCard {...item} gradientType='light' />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='absolute inset-[0%_-10%_0%_-10%] overflow-visible z-[15]'>
          <FooterGradientbg />
        </div>
        <div className='absolute inset-[0%_-10%_-45%_-10%] overflow-visible z-[15] rotate-180'>
          <FooterGradientbg />
        </div>
        {/* <div
          className='z-[17] absolute bottom-0 left-0 w-full h-full'
          style={{
            background:
            'radial-gradient(29.36% 32.61% at 58.21% -6.73%, #7C3AED 0%, #9D4EDD 32.68%, rgba(0, 0, 0, 0) 100%)',
            }}
            ></div> */}
        {/* <div
          className='absolute bottom-0 left-0 w-full h-1/2 aspect-video blur-sm overflow-hidden'
          style={{}}
          >
          <div
          className='absolute inset-0 z-[15]'
          style={{
            background:
            'radial-gradient(ellipse at 53% 100%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 84%)',
            // background:
            //   'radial-gradient(45.67% 48.7% at 24.15% -12.38%, #7C3AED 0%, #9D4EDD 32.68%, #00000059 90%, #000000 100%)',
            // clipPath: 'ellipse(80% 55% at 65% 100%)',
            // background:
            //   'radial-gradient(ellipse at 100% 100%, rgba(0, 0, 0, 1) 50%, rgba(0, 188, 212, 0) 100%)',
            }}
          />
          </div> */}
      </div>
      <section className='relative py-10 md:py-20 bg-background text-foreground overflow-hidden'>
        <div className='section-max-width section-padding-x space-y-8 z-20 relative -mb-28'>
          <p className='text-base md:text-lg font-normal text-center text-primary'>
            Coming Soon
          </p>
          <h2 className='section-heading-1-secondary text-center font-secondary'>
            Be First in Line for
            <br />
            Seller Swift Advance
          </h2>
          <p className='max-w-[700px] mx-auto text-center text-sm sm:text-base md:text-lg font-normal'>
            Currently available for Amazon sellers. New platform integrations
            coming soon.
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
              loading='lazy'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsTodayFindingTommorrowPage;
