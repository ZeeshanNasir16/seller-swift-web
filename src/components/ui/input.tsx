'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  prefixText?: string;
  helperText?: string;
  error?: string;
  isIconButton?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      icon,
      iconPosition = 'start',
      prefixText,
      helperText,
      error,
      isIconButton = false,
      ...props
    },
    ref
  ) => {
    const inputBaseClasses = cn(
      'flex w-full bg-transparent py-3.5 px-7 text-base transition-colors focus-visible:outline-none hover:outline-none rounded-full border border-gray-300 placeholder:text-disabledText',
      'disabled:cursor-not-allowed disabled:opacity-50',
      icon && (iconPosition === 'start' ? 'pl-14 pr-6' : 'pr-14 pl-6'),
      className,
      error &&
        'border-statusFail placeholder:text-statusFail focus-visible:placeholder:text-statusFail hover:border-statusFail text-statusFail hover:text-statusFail'
    );

    const labelClasses = cn(
      'block pl-3 mb-1.5 font-medium',
      props.disabled && 'text-disabledText',
      error && 'text-statusFail'
      // !error && 'text-secondary'
    );

    // verify is icon type button or other type
    return (
      <div className='w-full'>
        {label && (
          <label className={labelClasses}>
            {label}
            {/* {` `} */}
            {/* {props.required && <span className='text-statusFail'>*</span>} */}
          </label>
        )}
        <div className='relative flex items-center w-full'>
          {prefixText && (
            <span
              className={cn(
                'absolute left-4 text-sm -translate-y-1/2 top-1/2 text-secondary'
              )}
            >
              {prefixText}
            </span>
          )}
          {icon && iconPosition === 'start' && (
            <span
              className={cn(
                'absolute top-0 left-6 flex items-center w-fit h-full pointer-events-none [&>svg]:w-5 [&>svg]:h-5'
              )}
            >
              {icon}
            </span>
          )}
          <input
            type={type}
            className={inputBaseClasses}
            style={{
              paddingLeft: prefixText
                ? `${prefixText.length * 8 + 12}px`
                : undefined,
            }}
            ref={ref}
            {...props}
          />
          {icon && iconPosition === 'end' && (
            <div
              className={cn(
                'absolute flex items-center justify-center w-fit h-full z-20  [&>svg]:w-5 [&>svg]:h-5',
                isIconButton ? 'right-2' : 'right-6'
              )}
            >
              {icon}
            </div>
          )}
        </div>
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

Input.displayName = 'Input';

export { Input };
