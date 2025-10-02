import React from 'react'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>

export function Badge(props: BadgeProps) {
  return <span {...props} className={['pill', props.className].filter(Boolean).join(' ')} />
}

export default Badge


