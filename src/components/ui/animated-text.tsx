"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  fontSize?: number
  minWeight?: number
  maxWeight?: number
  animationDuration?: number
  delayMultiplier?: number
  className?: string
}

export function AnimatedText({
  text,
  fontSize = 150,
  minWeight = 100,
  maxWeight = 800,
  animationDuration = 2,
  delayMultiplier = 0.15,
  className = "",
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll("span")
    const numLetters = spans.length

    spans.forEach((span, i) => {
      const mappedIndex = i - numLetters / 2
      span.style.animationDelay = mappedIndex * delayMultiplier + "s"
    })
  }, [text, delayMultiplier])

  const characters = text.split("").map((char, index) => (
    <span
      key={index}
      aria-hidden="true"
      style={{
        display: "inline-block",
        animation: `breath ${animationDuration}s alternate cubic-bezier(0.37, 0, 0.63, 1) infinite`,
        animationFillMode: "both",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <p
        ref={containerRef}
        aria-label={text}
        className="font-sans m-0 p-0 text-center leading-none"
        style={{
          fontSize: `${fontSize}px`,    
          fontVariationSettings: `"wght" ${minWeight}`,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {characters}
      </p>
      {/* Universal keyframe injection since styled-jsx might not be present */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes breath {
          0% {
            font-variation-settings: "wght" ${minWeight};
          }
          100% {
            font-variation-settings: "wght" ${maxWeight};
          }
        }
      `}} />
    </div>
  )
}
