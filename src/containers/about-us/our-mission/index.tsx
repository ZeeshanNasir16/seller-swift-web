import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className='my-10 md:my-24 section-padding-x section-max-width'>
      <div className='grid lg:grid-cols-[minmax(350px,auto)_minmax(250px,500px)] gap-x-16 gap-y-6 md:gap-y-10 items-center'>
        <div className=' aspect-video'>
          <Image
            src='/images/misc/why-swift.png'
            alt='our-mission'
            width={0}
            height={0}
            sizes='100%'
            className='w-full object-cover rounded-lg h-full aspect-video'
            loading='lazy'
          />
        </div>
        <div className='space-y-3 md:space-y-6'>
          <h2 className='section-heading-1-secondary'>Our Mission</h2>
          <p className='text-base font-normal'>
            At Seller Swift, we believe eCommerce sellers deserve the same
            speed, clarity, and opportunity as the world’s biggest brands.
          </p>
          <p className='text-base font-normal'>
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
