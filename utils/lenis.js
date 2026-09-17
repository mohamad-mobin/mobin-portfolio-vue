import Lenis from "lenis"

let lenis = null
let rafId = null

export function initLenis(options = {}) {
  if (lenis) return lenis

  const isMobile = /Mobi|Android/i.test(navigator.userAgent)

  lenis = new Lenis({
    duration: 3.5,
    easing: (t) => 1 - Math.pow(1 - t, 5),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    wheelMultiplier: 0.7,
    smoothTouch: !isMobile,
    touchMultiplier: isMobile ? 0.6 : 1,
    infinite: false,
    lerp: 0.05,
    ...options,
  })

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

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