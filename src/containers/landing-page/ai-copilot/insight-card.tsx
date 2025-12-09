import Image from 'next/image';
import React from 'react';

const InsightCard = ({
  title,
  tagline,
  description,
}: {
  title: string;
  tagline: string;
  description: string;
}) => {
  return (
    <div
      className='rounded-lg relative z-20 p-10 lg:p-16 xl:p-24 pt-16 text-center'
      style={{
        background:
          'linear-gradient(119.66deg, rgba(100, 100, 100, 0.32) 7.9%, rgba(24, 24, 35, 0) 169.82%)',
      }}
    >
      <Image
        src={'/images/misc/graph.webp'}
        alt={title}
        width={0}
        height={0}
        sizes='100%'
        className='w-20 h-20 2xl:w-28 2xl:h-28 object-contain absolute -top-10 left-1/2 -translate-x-1/2'
        loading='lazy'
      />
      <h3 className='text-2xl lg:text-3xl font-bold mb-6'>{title}</h3>
      <p className='text-sm xl:text-base font-light mb-6'>{description}</p>
      <p className='text-sm xl:text-base font-light italic'>{tagline}</p>
    </div>
  );
};

export default InsightCard;
