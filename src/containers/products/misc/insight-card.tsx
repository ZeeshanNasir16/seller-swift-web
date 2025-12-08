import Image from 'next/image';
import React from 'react';

const InsightCard = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className='rounded-lg p-6 xl:p-10 text-center space-y-6 bg-[#2f2f31] text-foreground'>
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
