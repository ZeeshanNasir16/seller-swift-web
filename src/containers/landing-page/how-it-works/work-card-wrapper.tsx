import { cn } from '@/lib/utils';
import React from 'react';

const WorkCardWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-white/10 px-6 md:px-8 xl:px-12 py-8 md:py-12 z-20 backdrop-blur-md overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
};

export default WorkCardWrapper;
