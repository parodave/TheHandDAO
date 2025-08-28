import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({ 
  className, 
  size = 'xl', 
  children, 
  ...props 
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4',
        {
          'max-w-3xl': size === 'sm',
          'max-w-4xl': size === 'md',
          'max-w-6xl': size === 'lg',
          'max-w-7xl': size === 'xl',
          'max-w-none': size === 'full',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}