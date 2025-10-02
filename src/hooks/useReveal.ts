import { useEffect, useRef } from 'react'

export function useReveal(options: IntersectionObserverInit = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(10px)'

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true')
          ;(entry.target as HTMLElement).style.transition = 'opacity .6s ease, transform .6s ease'
          ;(entry.target as HTMLElement).style.opacity = '1'
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          obs.unobserve(entry.target)
        }
      })
    }, options)

    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return ref
}

export default useReveal


