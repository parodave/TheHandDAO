'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-mono uppercase tracking-wider transition-colors focus:outline-black focus:outline-1',
          {
            'bg-black text-white hover:bg-white hover:text-black border border-black': variant === 'default',
            'bg-white text-black border border-black hover:bg-black hover:text-white': variant === 'outline',
            'bg-transparent text-black hover:bg-black hover:text-white': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-xs': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };