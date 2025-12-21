"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement

      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute("href")
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
