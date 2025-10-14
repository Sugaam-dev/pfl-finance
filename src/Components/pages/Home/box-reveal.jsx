"use client"

import { useEffect } from "react"
import styles from "./box-reveal.module.css"

export default function BoxReveal({
  src,
  rows = 6,
  cols = 12,
  duration = 900,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  onDone,
}) {
  const tiles = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      tiles.push({ r, c, i: r * cols + c })
    }
  }

  // Stagger based on diagonal wave (r + c)
  const maxDelay = Math.min(900, duration * 0.75)
  const delayFor = (r, c) => {
    const denom = rows + cols - 2 || 1
    return ((r + c) / denom) * maxDelay
  }

  useEffect(() => {
    const t = setTimeout(() => onDone?.(), duration + maxDelay + 60)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, rows, cols, duration])

  return (
    <div
      className={styles.overlay}
      style={{
        "--rows": rows,
        "--cols": cols,
      }}
      aria-hidden="true"
    >
      {tiles.map(({ r, c, i }) => {
        const bgSize = `${cols * 100}% ${rows * 100}%`
        const posX = (c / (cols - 1 || 1)) * 100
        const posY = (r / (rows - 1 || 1)) * 100
        const delay = `${delayFor(r, c)}ms`

        return (
          <span
            key={`${src}-${i}`}
            className={styles.tile}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: bgSize,
              backgroundPosition: `${posX}% ${posY}%`,
              animationDuration: `${duration}ms`,
              animationDelay: delay,
              animationTimingFunction: easing,
            }}
          />
        )
      })}
    </div>
  )
}
