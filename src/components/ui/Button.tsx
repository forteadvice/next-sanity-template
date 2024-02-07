import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ButtonHTMLAttributes, FC, forwardRef, Ref } from 'react'
import { cn } from '@/lib/utils'

// Customized button variations
const buttonVariants = cva(
  `px-3 py-2 rounded-xl transition-all hover:ring-2 ring-indigo-300 hover:text-white`,
  {
    variants: {
      variant: {
        primary: 'bg-blue-400',
        danger: 'bg-red-500',
        alert: 'bg-yellow-500',
      },
      size: {
        small: 'py-2 px-4',
        large: 'text-xl py-3 px-6',
      },
    },
    defaultVariants: {
      size: 'small',
      variant: 'primary',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>
  label: string
  href?: string
  icon?: boolean
  target?: // three options
  '_blank' | '_self' | '_parent' | '_top'
}

const Button: FC<ButtonProps> = forwardRef(
  ({ size, variant, className, children, ...props }, ref) => {
    if (props.href && props.target) {
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={props.href}
          className={cn(buttonVariants({ className, variant, size }))}
          target={props.target}
        >
          {props.icon && <span className='mr-2'>👋</span>}
          {props.label}
        </a>
      )
    } else if (props.href && props.target !== '_blank') {
      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          href={props.href}
          className={cn(buttonVariants({ className, variant, size }))}
        >
          {props.icon && <span className='mr-2'>👋</span>}
          {props.label}
        </Link>
      )
    } else {
      return (
        <button
          ref={ref as Ref<HTMLButtonElement>}
          className={cn(buttonVariants({ className, variant, size }))}
        >
          {props.icon && <span className='mr-2'>👋</span>}

          {props.label}
        </button>
      )
    }
  },
)

export default Button
