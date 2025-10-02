import React from 'react'

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'default' | 'primary'
}

export function Button({ variant = 'default', className, ...props }: ButtonProps) {
  const classes = [
    'btn',
    variant === 'primary' ? 'btn-primary' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <a {...props} className={classes} />
}

export default Button


