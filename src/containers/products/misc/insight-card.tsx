import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const InsightCard = ({
  icon,
  title,
  idx,
}: {
  icon: string;
  title: string;
  idx: number;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 rounded-lg p-6 xl:p-10 text-center space-y-6 bg-[#2f2f31] text-foreground hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-500 w-full',
        idx % 2 === 0 && 'sm:top-[-50px]'
      )}
    >
      <Image
        src={icon}
        alt={title}
        width={0}
        height={0}
        sizes='100%'
        className='w-fit h-16 object-contain mx-auto'
        loading='lazy'
      />
      <p className='md:text-lg 2xl:text-xl font-medium'>{title}</p>
    </div>
  );
};

export default InsightCard;
