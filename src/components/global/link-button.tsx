import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const LINK_BTN_STYLES =
  'w-fit block py-1 relative text-base xl:text-lg font-light hover:underline  transition-all underline-offset-[6px] duration-300 ease-in-out cursor-pointer leading-normal';

const LinkButton = ({
  children,
  className,
  href,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        LINK_BTN_STYLES,
        // 'after:content-[""] after:absolute after:left-0 after:-bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
