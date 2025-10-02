import React from 'react'

type IconLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: React.ReactNode
}

export function IconLink({ icon, className, children, ...props }: IconLinkProps) {
  return (
    <a {...props} className={['btn', className].filter(Boolean).join(' ')}>
      {icon}
      {children}
    </a>
  )
}

export default IconLink


