import { useEffect, useState } from 'react'

export function useParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 20
      const y = (window.innerHeight / 2 - e.clientY) / 20
      setOffset({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getStyle = (speed = 0.1) => ({
    transform: `translate(${offset.x * speed}px, ${offset.y * speed}px)`,
    transition: 'transform 0.1s ease-out',
  })

  return { offset, getStyle }
}
