import InsightCard from '@/containers/products/misc/insight-card';
import '@/containers/products/styles.css';
import Image from 'next/image';
import React from 'react';

const InsightsToImpact = () => {
  return (
    <section className='bg-background -mt-px'>
      <div className='section-padding-x section-max-width relative z-20 space-y-12 py-10 md:py-20'>
        <h2 className='section-heading-1-secondary text-center mb-12 text-foreground'>
          Insights To Impact
        </h2>
        <div className='card-container'>
          <InsightCard
            title='Connect Your Store'
            icon={'/images/why-us/customer-review.webp'}
            idx={1}
          />
          <div className='connector'>
            <Image
              src={'/icons/misc/connector.svg'}
              alt='img'
              width={200}
              height={200}
              loading='lazy'
              className='h-full w-full object-contain'
            />
          </div>
          <InsightCard
            title='Uncover Profit Insights'
            icon={'/images/why-us/stack.webp'}
            idx={2}
          />
          <div className='connector sm:!hidden lg:!flex'>
            <Image
              src={'/icons/misc/connector-sec.svg'}
              alt='img'
              width={200}
              height={200}
              loading='lazy'
              className='h-full w-full object-contain'
            />
          </div>
          <InsightCard
            title='Optimize Opportunities'
            icon={'/images/misc/stack-3.webp'}
            idx={3}
          />
          <div className='connector'>
            <Image
              src={'/icons/misc/connector.svg'}
              alt='img'
              width={200}
              height={200}
              loading='lazy'
              className='h-full w-full object-contain'
            />
          </div>
          <InsightCard
            title='Accelerate Growth'
            icon={'/images/misc/take-action.webp'}
            idx={4}
          />
        </div>
      </div>
    </section>
  );
};

export default InsightsToImpact;
