import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const OurValuesCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        'relative z-20  px-8 py-10 rounded-lg bg-gradient-to-t from-gray-950 to-primary/20 backdrop-blur-md min-h-[270px] h-auto bg-[#EBEBF433] hover:bg-foreground hover:text-background transition-all duration-300'
      )}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px',
      }}
    >
      <div className='flex flex-col gap-20 justify-center'>
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes='100%'
          className='w-fit h-16 object-contain'
          loading='lazy'
        />
        <div className='space-y-4'>
          <h3 className='text-xl font-medium'>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurValuesCard;
