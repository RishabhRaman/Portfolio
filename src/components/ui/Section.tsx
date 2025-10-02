import React from 'react'
import { useReveal } from '../../hooks/useReveal'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string
  title?: string
  subtitle?: string
}

export function Section({ id, title, subtitle, children, ...props }: SectionProps) {
  const ref = useReveal()
  return (
    <section id={id} className={[props.className ?? '', 'section'].join(' ').trim()} ref={ref as any}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

export default Section


