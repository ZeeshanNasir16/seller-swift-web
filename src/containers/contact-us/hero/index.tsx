import Image from 'next/image';
import React from 'react';

const ContactUsHero = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='hero-bg-gradient-light-secondary' />
      <div className='hero-bg-gradient-light-secondary-overlay' />
      <div className='relative z-20 section-padding-x section-max-width overflow-visible hero-padding'>
        <div className='w-full space-y-6 md:space-y-10 md:max-w-[500px] lg:max-w-fit'>
          <h2 className='heading-1-secondary text-gradient-tertiary-light max-w-[11ch]'>
            Let's
            <br />
            Connect
          </h2>
          <p className='text-sm sm:text-base md:text-lg'>
            Whether you’re a seller, partner, or investor, we’d love to hear
            from you!
          </p>
        </div>
        <div className='hidden md:block absolute top-1/2 -right-[70%] md:-right-[550px] xl:-right-[20%] 2xl:-right-[300px] -translate-y-1/2 aspect-square z-[16] h-[80%]'>
          <Image
            src='/images/gradients/cube-absrtract.webp'
            alt='circle-glass'
            width={350}
            height={350}
            sizes='100%'
            className='object-contain w-full h-full'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
