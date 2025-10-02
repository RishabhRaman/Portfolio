import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: number
}

export function Card({ padding = 20, style, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={['card', props.className].filter(Boolean).join(' ')}
      style={{ padding, ...style }}
    />
  )
}

export default Card


