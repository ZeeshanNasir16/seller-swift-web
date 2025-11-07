import { whyUs } from '@/containers/landing-page/why-seller-swift/data';
import WhyBenefitCard from '@/containers/landing-page/why-seller-swift/why-benefit-card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const WhySellerSwift = () => {
  return (
    <div className='mt-24 py-10 md:py-20 mx-6 rounded-t-lg z-20 relative bg-gradient-to-t from-background to-primary/20'>
      <div className='section-max-width section-padding-x space-y-8'>
        <div className='flex flex-col md:flex-row gap-6 md:items-center justify-between relative'>
          <h2 className='section-heading-1 text-gradient-primary max-w-fit'>
            Why Seller Swift
          </h2>
          <p className='max-w-[440px] text-base font-normal'>
            {/* why-swift */}
            Seller Swift combines real-time analytics, AI-driven insights, and
            actionable growth benchmarks into one powerful platform that helps
            eCommerce sellers make smarter decisions and scale faster
          </p>
        </div>
        <div className='relative w-full'>
          <div className='absolute top-1/2 -left-[200px] md:-left-[220px] -translate-y-1/2 aspect-square z-20'>
            <Image
              src='/images/gradients/cube-absrtract.png'
              alt='cube-abstract'
              width={0}
              height={0}
              sizes='100%'
              className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] aspect-square object-contain'
              loading='lazy'
            />
          </div>
          <Image
            src='/images/misc/why-swift.png'
            alt='why-swift'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full aspect-video object-cover rounded-lg '
            loading='lazy'
          />
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {whyUs.map((item,idx) => (
             <div
                  className={cn(idx % 2 === 0 ? 'relative' : 'mt-12')}
                  key={item.id}
                >
            <WhyBenefitCard key={item.id} {...item} gradientType='dark' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySellerSwift;
