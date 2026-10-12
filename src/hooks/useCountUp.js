import { useEffect, useState, useRef } from 'react'

export function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!startOnView) {
      animate()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  function animate() {
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return { count, ref }
}
