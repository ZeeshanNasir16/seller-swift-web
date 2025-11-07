import Image from 'next/image';
import React from 'react';

const Sellers = () => {
  return (
    <div className='relative my-16 md:my-32 section-padding-x section-max-width text-center'>
      <p className='text-center text-sm font-medium font-secondary uppercase tracking-[5.93px]'>
        The Platform Behind the next generation of online sellers
      </p>
      <p className='text-[15px] mt-2.5'>
        Built in collaboration with leading partners in eCommerce, fintech, and
        AI innovation.
      </p>
      <div className='mt-12 flex items-center gap-x-12 gap-y-6 flex-wrap justify-center'>
        {sellers.map((seller) => (
          <Image
            key={seller}
            src={seller}
            alt='quote'
            width={0}
            height={0}
            sizes='100%'
            className='w-fit h-full object-contain max-h-[53px]'
            loading='eager'
          />
        ))}
      </div>
    </div>
  );
};

const sellers = [
  '/images/sellers/amazon.png',
  '/images/sellers/stripe.png',
  '/images/sellers/persona.png',
  '/images/sellers/stratique.jpg',
  '/images/sellers/idb.png',
];

export default Sellers;
