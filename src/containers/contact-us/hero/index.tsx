import Image from 'next/image';
import React from 'react';

const ContactUsHero = () => {
  return (
    <section className='relative hero-top-padding bg-background text-foreground pb-40'>
      <div className='hero-bg-gradient-light-secondary' />
      <div className='hero-bg-gradient-light-secondary-overlay' />
      <div className='relative z-20 section-padding-x section-max-width'>
        <div className='w-full sm:max-w-[75%] md:max-w-[690px] space-y-6'>
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
        <div className='absolute top-1/2 -right-[370px] md:-right-[300px] lg:-right-[200px] -translate-y-1/2 aspect-square z-[16]'>
          <Image
            src='/images/gradients/cube-absrtract.png'
            alt='circle-glass'
            width={0}
            height={0}
            sizes='100%'
            className='w-[450px] h-[450px] aspect-square object-cover'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
