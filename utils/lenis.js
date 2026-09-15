import Lenis from "lenis"

let lenis = null
let rafId = null

export function initLenis(options = {}) {
  if (lenis) return lenis

  const isMobile = /Mobi|Android/i.test(navigator.userAgent)

  lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1.2,
    smoothTouch: !isMobile,
    touchMultiplier: isMobile ? 1 : 2,
    infinite: false,
    ...options,
  })

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

  // Anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = anchor.getAttribute("href")

      if (targetId === "#" || targetId === "") {
        lenis.scrollTo(0)
      } else {
        lenis.scrollTo(targetId)
      }
    })
  })

  return lenis
}

export function stopLenis() {
  if (lenis) {
    lenis.stop()
  }
}

export function startLenis() {
  if (lenis) {
    lenis.start()
  }
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy()

    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }

    lenis = null
  }
}

export function getLenis() {
  return lenis
}