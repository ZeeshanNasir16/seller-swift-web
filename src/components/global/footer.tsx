import LinkButton from '@/components/global/link-button';
import Logo from '@/components/global/logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { app_config } from '@/config';
import { CircleCheck, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GetStartedToday from './get-started-today';
import PrimaryHorizontalSeperator from './primary-horizontal-seperator';

const Footer = () => {
  return (
    <footer className='relative z-20 pb-8 md:pb-12 pt-20 text-white overflow-y-clip overflow-x-hidden'>
      <div className='absolute inset-[-16%_0%_-10%_0%]'>
        <Image
          src={'/images/gradients/gradient-6.png'}
          alt='img'
          fill
          className=''
          loading='lazy'
        />
      </div>
      <GetStartedToday />
      <PrimaryHorizontalSeperator />
      <div className='pt-12 md:pt-24 section-max-width section-padding-x space-y-8 overflow-hidden relative z-20'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-[auto_1fr_auto] gap-x-16 gap-y-12 md:gap-y-20 items-start'>
          <div className='space-y-16'>
            <div className='space-y-6'>
              <Logo withText className='h-12 md:h-16 xl:h-20' isIcon />
              <p className='max-w-[450px] xl:max-w-[312px] text-sm md:text-base xl:text-lg'>
                Smarter Decisions. Faster Growth.
              </p>
              <Button size='lg'>Request a Demo</Button>
            </div>
            <div className='flex items-center gap-8'>
              <Link href={`mailto:${app_config.facebook}`}>
                <Image
                  src={'/images/social/facebook.svg'}
                  alt='facebook'
                  width={0}
                  height={0}
                  sizes='100%'
                  className='w-4 h-4 xl:w-6 xl:h-6 object-contain'
                  loading='lazy'
                />
              </Link>
              <Link href={`mailto:${app_config.instagram}`}>
                <Image
                  src={'/images/social/instagram.svg'}
                  alt='instagram'
                  width={0}
                  height={0}
                  sizes='100%'
                  className='w-4 h-4 xl:w-6 xl:h-6 object-contain'
                  loading='lazy'
                />
              </Link>
              <Link href={`mailto:${app_config.linkedin}`}>
                <Image
                  src={'/images/social/linkedin.svg'}
                  alt='linkedin'
                  width={0}
                  height={0}
                  sizes='100%'
                  className='w-4 h-4 xl:w-6 xl:h-6 object-contain'
                  loading='lazy'
                />
              </Link>
              <Link href={`mailto:${app_config.youtube}`}>
                <Image
                  src={'/images/social/youtube.svg'}
                  alt='youtube'
                  width={0}
                  height={0}
                  sizes='100%'
                  className='w-4 h-4 xl:w-6 xl:h-6 object-contain'
                  loading='lazy'
                />
              </Link>
              <Link href={`/`}>
                <Image
                  src={'/images/social/tiktok.svg'}
                  alt='tiktok'
                  width={0}
                  height={0}
                  sizes='100%'
                  className='w-4 h-4 xl:w-6 xl:h-6 object-contain'
                  loading='lazy'
                />
              </Link>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-6 md:gap-16 sm:max-w-[350px] sm:ml-auto'>
            {footerLinks.map((link) => (
              <div key={link.id} className='space-y-1.5 md:space-y-3'>
                <p className='text-base md:text-lg xl:text-xl text-secondary font-semibold'>
                  {link.label}
                </p>
                <div className='flex flex-col'>
                  {link.links.map((link, idx) => (
                    <LinkButton
                      key={`footer-link-${idx}`}
                      href={link.href}
                      className='font-normal text-sm md:text-base xl:text-lg'
                    >
                      {link.label}
                    </LinkButton>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='gap-y-4 gap-x-12 xl:max-w-[350px] md:col-span-2 xl:col-span-1 flex flex-col md:flex-row xl:flex-col justify-between'>
            <div className='space-y-4 max-w-[450px]'>
              <p className='text-base md:text-lg xl:text-xl text-secondary font-semibold'>
                Join our mailing list for the latest insights, updates, and
                growth strategies
              </p>
              <div className='flex items-center gap-3'>
                <Mail className='size-4' />
                <p className='text-sm xl:text-base'>ersadwork@gmail.com</p>
              </div>
            </div>
            <Separator className='bg-white hidden xl:block' />
            <div className='flex gap-2 items-start  max-w-[450px]'>
              <CircleCheck
                className='size-4 flex-shrink-0 text-background'
                fill={'#fff'}
              />
              <p className='text-xs xl:text-sm font-light'>
                By subscribing, you agree to receive emails from Seller Swift.
                We collect and process your data in accordance with our Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
        <div className='h-px w-full bg-gradient-to-r from-foreground/0 via-foreground/80 to-foreground/0' />
        <p className='text-center text-sm md:text-base xl:text-lg font-normal'>
          Copyright © 2025 Seller Swift. All rights reserved.
        </p>
      </div>
      {/* <div className='bg-gradient-footer' />
      <div className='bg-gradient-footer-overlay' /> */}
    </footer>
  );
};

const footerLinks = [
  // {
  //   id: 'footer-contact-us',
  //   label: 'Contact Us',
  //   links: [
  //     {
  //       label: 'Insights',
  //       href: '/',
  //     },
  //     {
  //       label: 'Advance',
  //       href: '/',
  //     },
  //     {
  //       label: 'Ai Co-Pilot',
  //       href: '/',
  //     },
  //   ],
  // },
  {
    id: 'footer-help',
    label: 'Company',
    links: [
      {
        label: 'About us',
        href: '/about-us',
      },
      {
        label: 'Contact',
        href: '/contact-us',
      },
      // {
      //   label: 'Digital hub',
      //   href: '/',
      // },
      // {
      //   label: 'Partner with Us',
      //   href: '/',
      // },
    ],
  },
  {
    id: 'footer-legal',
    label: 'Help',
    links: [
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        label: 'Terms & Conditions',
        href: '/terms-and-conditions',
      },
      {
        label: 'User Agreement',
        href: '/user-agreement',
      },
    ],
  },
];

export default Footer;
