import Image from 'next/image';
import React from 'react';

const OurVision = () => {
  return (
    <section className='relative'>
      <div className='section-padding-x section-max-width space-y-12 relative mt-10 md:mt-24'>
        <div className='flex flex-col md:flex-row gap-6 md:items-center justify-between relative'>
          <h2 className='section-heading-1-secondary max-w-fit flex-shrink-0'>
            Our Vision
          </h2>
          <div className='md:max-w-[440px] text-base font-normal space-y-4'>
            <p>
              To become the leading growth platform for online sellers —
              connecting data, capital, and decision intelligence in one
              seamless ecosystem.
            </p>
            <p>
              Our vision is a world where every eCommerce seller, no matter
              their size, can compete like an enterprise.
            </p>
          </div>
        </div>
        <div className='relative w-full z-20'>
          <div className='absolute top-1/2 -left-[200px] md:-left-[280px] -translate-y-1/2 aspect-square z-20'>
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
            src='/images/misc/app-panel-2.png'
            alt='why-swift'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-fit object-contain rounded-lg '
            loading='lazy'
          />
        </div>
      </div>
      <div className='absolute inset-0 z-[15] bg-gradient-to-t from-black via-black/90 to-transparent w-full h-full' />
    </section>
  );
};

export default OurVision;
