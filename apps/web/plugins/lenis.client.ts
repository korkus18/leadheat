import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({ lerp: 0.15 })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
