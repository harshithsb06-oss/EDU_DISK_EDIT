import { useEffect, useRef } from 'react'

export function useAutoScroll(speed = 0.5, intervalMs = 50) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let scrollAmount = 0
    let direction = 1
    let paused = false

    const id = setInterval(() => {
      if (paused) return
      const maxScroll = el.scrollWidth - el.clientWidth
      if (maxScroll <= 0) return

      if (scrollAmount >= maxScroll) direction = -1
      if (scrollAmount <= 0) direction = 1

      scrollAmount += direction * speed
      el.scrollTo({ left: scrollAmount, behavior: 'auto' })
    }, intervalMs)

    const pause = () => { paused = true }
    const resume = () => { paused = false; scrollAmount = el.scrollLeft }

    el.addEventListener('pointerenter', pause)
    el.addEventListener('pointerleave', resume)

    return () => {
      clearInterval(id)
      el.removeEventListener('pointerenter', pause)
      el.removeEventListener('pointerleave', resume)
    }
  }, [speed, intervalMs])

  return ref
}
