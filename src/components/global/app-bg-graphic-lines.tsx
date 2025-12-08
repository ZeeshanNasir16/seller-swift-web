import Image from 'next/image';
import React from 'react';

const AppBgGraphics = () => {
  return (
    <div className='absolute z-[16] w-[85%] mx-auto inset-0 h-full opacity-40'>
      <Image
        src='/images/gradients/vertical-lines.svg'
        alt='vertical lines'
        fill
        className='object-cover'
        loading='lazy'
      />
    </div>
  );
};

export default AppBgGraphics;
