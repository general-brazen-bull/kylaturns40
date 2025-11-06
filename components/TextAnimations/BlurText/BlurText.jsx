"use client"

import { motion } from "motion/react"
import { useEffect, useRef, useState, useMemo } from "react"

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))])
  const keyframes = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })
  return keyframes
}

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = [0.33, 1, 0.68, 1], // smoother cubic-bezier easing
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("")
  const [inView, setInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Only trigger once when in view
  useEffect(() => {
    if (!ref.current || hasAnimated) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          setHasAnimated(true) // ✅ ensures it only animates once
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin, hasAnimated])

  // Animation presets
  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -40 }
        : { filter: "blur(10px)", opacity: 0, y: 40 },
    [direction]
  )

  const defaultTo = useMemo(
    () => [
      { filter: "blur(4px)", opacity: 0.8, y: direction === "top" ? 8 : -8 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  )

  return (
    <p
      ref={ref}
      className={`blur-text flex flex-wrap justify-center text-center ${className}`}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        }

        return (
          <motion.span
            key={index}
            className="inline-block will-change-[transform,filter,opacity]"
            initial={fromSnapshot}
            animate={
              inView
                ? animateKeyframes
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true }}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{ display: "inline-block" }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        )
      })}
    </p>
  )
}

export default BlurText
