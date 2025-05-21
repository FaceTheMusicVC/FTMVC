"use client"

import { useEffect } from "react"

export function BrowserCompatibility() {
  useEffect(() => {
    // Fix for older browsers that don't support certain features
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (callback) => window.setTimeout(callback, 1000 / 60)
    }

    // Fix for Safari flexbox issues
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (isSafari) {
      document.documentElement.classList.add("safari")
    }

    // Fix for IE specific issues
    const isIE = /*@cc_on!@*/ false || !!(document as any).documentMode
    if (isIE) {
      document.documentElement.classList.add("ie")
    }

    // Fix for Edge specific issues
    const isEdge = !isIE && !!(window as any).StyleMedia
    if (isEdge) {
      document.documentElement.classList.add("edge")
    }
  }, [])

  return null
}
