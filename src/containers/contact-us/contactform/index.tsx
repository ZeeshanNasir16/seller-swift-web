import { app_config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ContactUsForm from './form';

const ContactFormWrapper = () => {
  return (
    <div className='py-20 section-padding-x section-max-width grid md:grid-cols-2'>
      <div className='pr-16 relative space-y-20'>
        <div className='flex items-center gap-6'>
          <Image
            src='/images/misc/eclipse.webp'
            alt='email-icon'
            width={0}
            height={0}
            sizes='100%'
            className='w-8 h-8 object-contain'
            loading='lazy'
          />
          <p className='text-base font-semibold'>Get In Touch</p>
        </div>
        <div className='space-y-4'>
          <h5 className='text-5xl font-semibold'>Isaac Alfaks</h5>
          <p className='text-xl text-muted-foreground'>CEO & Founder</p>
          <p>
            As an eCommerce seller, I was tired of waiting weeks for payouts and
            trying to make sense of endless reports that never told the full
            story. I knew there had to be a smarter, faster way to manage
            growth.
          </p>
          <p>
            Seller Swift was built to solve that — giving sellers instant
            visibility, actionable insights, and access to funding when they
            need it most.
          </p>
          <p>
            My goal is simple: to help you run your business with the same
            clarity and confidence that I once went searching for.
          </p>
          <div className='space-y-0.5'>
            <p>Email Us</p>
            <p className='font-medium'>info@sellerswift.com</p>
          </div>
          {/* <div className='flex items-center gap-6 pt-6'>
            <Link href={`mailto:${app_config.facebook}`}>
              <Image
                src={'/icons/social/facebook.svg'}
                alt='facebook'
                width={0}
                height={0}
                sizes='100%'
                className='w-4 h-4 md:w-6 md:h-6 object-contain'
                loading='lazy'
              />
            </Link>
            <Link href={`mailto:${app_config.instagram}`}>
              <Image
                src={'/icons/social/instagram.svg'}
                alt='instagram'
                width={0}
                height={0}
                sizes='100%'
                className='w-4 h-4 md:w-6 md:h-6 object-contain'
                loading='lazy'
              />
            </Link>
            <Link href={`mailto:${app_config.linkedin}`}>
              <Image
                src={'/icons/social/linkedin.svg'}
                alt='linkedin'
                width={0}
                height={0}
                sizes='100%'
                className='w-4 h-4 md:w-6 md:h-6 object-contain'
                loading='lazy'
              />
            </Link>
            <Link href={`mailto:${app_config.youtube}`}>
              <Image
                src={'/icons/social/youtube.svg'}
                alt='youtube'
                width={0}
                height={0}
                sizes='100%'
                className='w-4 h-4 md:w-6 md:h-6 object-contain'
                loading='lazy'
              />
            </Link>
            <Link href={`mailto:${app_config.tiktok}`}>
              <Image
                src={'/icons/social/tiktok.svg'}
                alt='tiktok'
                width={0}
                height={0}
                sizes='100%'
                className='w-4 h-4 md:w-6 md:h-6 object-contain'
                loading='lazy'
              />
            </Link>
          </div> */}
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default ContactFormWrapper;
