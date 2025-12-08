import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({
  isIcon = false,
  className,
  withText = false,
}: {
  isIcon?: boolean;
  withText?: boolean;
  className?: string;
}) => {
  return isIcon ? (
    <Image
      src={
        withText ? '/images/logo/logo-with-text.png' : '/images/logo/logo.png'
      }
      alt='logo'
      width={0}
      height={0}
      sizes='100%'
      className={cn('w-fit h-10 object-contain', className)}
      loading='eager'
    />
  ) : (
    <Link href='/'>
      <Image
        src={
          withText ? '/images/logo/logo-with-text.png' : '/images/logo/logo.png'
        }
        alt='logo'
        width={0}
        height={0}
        sizes='100%'
        className={cn('w-fit h-10 object-contain', className)}
        loading='eager'
      />
    </Link>
  );
};

export default Logo;
