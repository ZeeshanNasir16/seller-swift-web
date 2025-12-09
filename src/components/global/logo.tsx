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
  const logo_src = withText
    ? '/icons/logo/logo-with-text.svg'
    : '/icons/logo/logo.svg';
  return isIcon ? (
    <Image
      src={logo_src}
      alt='logo'
      width={0}
      height={0}
      sizes='100%'
      className={cn(
        withText ? 'w-fit h-5' : 'w-fit h-10 object-contain',
        className
      )}
      loading='eager'
    />
  ) : (
    <Link href='/'>
      <Image
        src={logo_src}
        alt='logo'
        width={0}
        height={0}
        sizes='100%'
        className={cn(
          withText ? 'w-fit h-5' : 'w-fit h-10 object-contain',
          className
        )}
        loading='eager'
      />
    </Link>
  );
};

export default Logo;
