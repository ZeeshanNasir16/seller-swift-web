'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  label?: string;
  helperText?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, helperText, error, ...props }, ref) => {
    const textareaBaseClasses = cn(
      'flex min-h-[60px] w-full rounded-2xl border border-gray-300 bg-transparent py-3.5 px-6 text-base placeholder:text-disabledText focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      error &&
        'border-statusFail placeholder:text-statusFail focus-visible:placeholder:text-statusFail hover:border-statusFail text-statusFail hover:text-statusFail',
      className
    );

    const labelClasses = cn(
      'block pl-3 mb-1.5 font-medium',
      props.disabled && 'text-disabledText',
      error && 'text-statusFail'
    );

    return (
      <div className='w-full'>
        {label && <label className={labelClasses}>{label}</label>}
        <textarea className={textareaBaseClasses} ref={ref} {...props} />
        {error ? (
          <p className='mt-1.5 text-xs text-statusFail'>{error}</p>
        ) : (
          helperText && (
            <p className='mt-1.5 text-xs text-muted-foreground'>{helperText}</p>
          )
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
