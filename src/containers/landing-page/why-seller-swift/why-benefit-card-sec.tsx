import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const WhyBenefitCardSecondary = ({
  image,
  title,
  description,
  gradientType,
}: {
  image: string;
  title: string;
  description: string;
  gradientType: 'light' | 'dark';
}) => {
  return (
    <div
      className={cn(
        'relative z-20  px-8 xl:px-10 py-10 xl:py-14 rounded-lg bg-gradient-to-t from-gray-950 to-primary/20 backdrop-blur-md min-h-[270px] bg-white/35 blur-xl',
        gradientType === 'dark'
          ? 'bg-gradient-to-t from-gray-950 to-primary/20 backdrop-blur-md'
          : 'bg-[#EBEBF433]'
      )}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px',
      }}
    >
      <div className='flex flex-col gap-4'>
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes='100%'
          className='w-fit h-12 object-contain'
          loading='lazy'
        />
        <h3 className='text-xl xl:text-2xl font-medium'>{title}</h3>
        <p className='text-sm md:text-base'>{description}</p>
      </div>
    </div>
  );
};

export default WhyBenefitCardSecondary;
