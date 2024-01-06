import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  'font-bold',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-500 hover:bg-indigo-600 text-white rounded',
      },
      size: {
        default: 'h-10 py-2 px-4',
        wide: 'h-10 py-2 px-8',
        sm: 'h-9 px-2',
        md: 'h-10 py-2 px-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size:'default'
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    const combinedClassName = buttonVariants({ variant, size, className });

    return (
      <button
        className={combinedClassName}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
