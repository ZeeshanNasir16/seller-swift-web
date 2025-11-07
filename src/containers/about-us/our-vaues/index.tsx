import { whyUs } from '@/containers/landing-page/why-seller-swift/data';
import WhyBenefitCard from '@/containers/landing-page/why-seller-swift/why-benefit-card';
import { cn } from '@/lib/utils';
import React from 'react';

const OurValues = () => {
  return (
    <section className='relative'>
      <div className='section-max-width section-padding-x space-y-12 py-10 md:py-20 relative z-20'>
        <h2 className='section-heading-1-secondary text-center text-white'>
          Our Values
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {whyUs.map((item, idx) => (
            <div
              className={cn(idx % 2 === 0 ? 'relative' : 'mt-8')}
              key={item.id}
            >
              <WhyBenefitCard {...item} gradientType='light' />
            </div>
          ))}
        </div>
      </div>
      <div
        className='absolute inset-0 z-[15] w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at 53% 0%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 84%)',
        }}
      ></div>
      {/* <div className='absolute inset-0 z-[15] bg-gradient-to-b from-black via-black/90 to-transparent w-full h-full' /> */}
    </section>
  );
};

export default OurValues;
