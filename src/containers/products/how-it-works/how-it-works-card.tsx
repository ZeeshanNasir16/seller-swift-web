import { cn } from '@/lib/utils';
import React from 'react';

const HowItWorksCard = ({
  id,
  title,
  description,
  className,
}: {
  id: number;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'bg-white z-20 relative rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full gap-16',
        className
      )}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px',
      }}
    >
      <div className='rounded-full w-20 h-20 aspect-square bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-2'>
        <span className='text-2xl font-bold text-white'>
          {id < 10 ? `0${id}` : id}
        </span>
      </div>
      <div className='space-y-2'>
        <h5 className='text-2xl font-bold'>{title}</h5>
        <p className='text-base font-normal'>{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
