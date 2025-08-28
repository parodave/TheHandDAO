import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({ 
  className, 
  spacing = 'lg', 
  children, 
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          'py-8': spacing === 'sm',
          'py-0': spacing === 'none',
          'py-12': spacing === 'md',
          'py-16': spacing === 'lg',
          'py-24': spacing === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}