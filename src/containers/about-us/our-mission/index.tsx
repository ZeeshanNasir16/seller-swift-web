import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className='my-10 md:my-24 section-padding-x section-max-width'>
      <div className='grid lg:grid-cols-[minmax(350px,auto)_minmax(250px,auto)] gap-x-16 lg:gap-x-24 gap-y-6 md:gap-y-10 items-center'>
        <div className=' aspect-video z-20'>
          <Image
            src='/images/misc/our-mission.webp'
            alt='our-mission'
            width={0}
            height={0}
            sizes='100%'
            className='w-full object-cover rounded-lg h-full aspect-video'
            loading='lazy'
          />
        </div>
        <div className='space-y-3 md:space-y-6 relative z-20'>
          <h2 className='section-heading-1-secondary'>Our Mission</h2>
          <p className='text-base xl:text-lg font-normal'>
            At Seller Swift, we believe eCommerce sellers deserve the same
            speed, clarity, and opportunity as the world’s biggest brands.
          </p>
          <p className='text-base xl:text-lg font-normal'>
            We’re here to empower that freedom — turning store data into clear
            insights and fast access to capital so sellers can scale confidently
            and sustainably.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
