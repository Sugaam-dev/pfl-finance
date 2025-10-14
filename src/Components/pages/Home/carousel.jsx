"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import BoxReveal from "./box-reveal";


// Simple arrow button
function Arrow({ dir, onClick }) {
  const pos = dir === "left" ? { left: "1rem" } : { right: "1rem" }
  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Previous slide" : "Next slide"}
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-20 bg-background/40 hover:bg-background/60 border border-border px-3 py-3 rounded-md backdrop-blur-sm transition-colors"
      style={pos}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  )
}

export default function Carousel({ images = [], interval = 4500, rows = 6, cols = 12 }) {
  const [index, setIndex] = useState(0)
  const [animSrc, setAnimSrc] = useState(images[0])
  const [isAnimating, setIsAnimating] = useState(true)
  const hoverRef = useRef(false)
  const timerRef = useRef(null)

  const goTo = useCallback(
    (nextIdx) => {
      if (!images.length) return
      if (nextIdx === index) return
      setIsAnimating(true)
      setAnimSrc(images[nextIdx])
      // When animation finishes, BoxReveal will call onDone to commit the new index
    },
    [index, images],
  )

  const next = useCallback(() => {
    if (!images.length) return
    const ni = (index + 1) % images.length
    goTo(ni)
  }, [index, images, goTo])

  const prev = useCallback(() => {
    if (!images.length) return
    const pi = (index - 1 + images.length) % images.length
    goTo(pi)
  }, [index, images, goTo])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  // Autoplay with hover pause
  useEffect(() => {
    if (!images.length) return
    const tick = () => {
      if (!hoverRef.current) next()
    }
    timerRef.current = setInterval(tick, interval)
    return () => clearInterval(timerRef.current)
  }, [images.length, interval, next])

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-roledescription="carousel"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {/* Base image (current) */}
        <img
          src={images[index] || "/placeholder.svg"}
          alt="slide image"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
            isAnimating ? "translate-x-2" : "translate-x-0"
          }`}
        />
        {/* Soft veil for legibility */}
        <div className="absolute inset-0 bg-background/20" aria-hidden="true" />

        {/* Arrows */}
        <Arrow dir="left" onClick={prev} />
        <Arrow dir="right" onClick={next} />

        {/* Box-grid reveal overlay for incoming slide */}
        {isAnimating && (
          <BoxReveal
            src={animSrc}
            rows={rows}
            cols={cols}
            duration={900}
            onDone={() => {
              const newIdx = images.indexOf(animSrc)
              if (newIdx !== -1) setIndex(newIdx)
              setIsAnimating(false)
            }}
          />
        )}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full border border-border transition-all ${
              i === index ? "bg-primary" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
