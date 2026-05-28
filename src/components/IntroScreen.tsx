import { useEffect, useRef, useState } from 'react'
import './IntroScreen.css'

type IntroScreenProps = {
  onDone: () => void
}

type Phase = 'init' | 'reveal' | 'underline' | 'tagline' | 'fadeout'

const TAGLINE = 'SISTEMAS · AUTOMAÇÃO · SAAS'
const PRIMARY = '#d94f25'

export function IntroScreen({ onDone }: IntroScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const timersRef = useRef<number[]>([])
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  const [phase, setPhase] = useState<Phase>('init')
  const [revealPct, setRevealPct] = useState(100)
  const [showUnderline, setShowUnderline] = useState(false)
  const [typedCount, setTypedCount] = useState(0)
  const [showCursor, setShowCursor] = useState(false)
  const [opacity, setOpacity] = useState(1)

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const mobile = window.innerWidth < 768
    const count = mobile ? 38 : 68

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; accent: boolean }

    const pts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.1 + 0.35,
      alpha: Math.random() * 0.4 + 0.1,
      accent: Math.random() > 0.83,
    }))

    const t0 = performance.now()

    const frame = (now: number) => {
      const elapsed = (now - t0) / 1000
      const converging = elapsed > 2.5

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#080b12'
      ctx.fillRect(0, 0, w, h)

      // Subtle center radial fog
      const fog = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.min(w, h) * 0.55)
      fog.addColorStop(0, 'rgba(217,79,37,0.055)')
      fog.addColorStop(1, 'transparent')
      ctx.fillStyle = fog
      ctx.fillRect(0, 0, w, h)

      const cx = w / 2
      const cy = h / 2

      for (const p of pts) {
        if (converging) {
          const dx = cx - p.x
          const dy = cy - p.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const pull = Math.min(0.05, 0.009 + (elapsed - 2.5) * 0.004)
          p.vx += (dx / dist) * pull
          p.vy += (dy / dist) * pull
          p.vx += (Math.random() - 0.5) * 0.014
          p.vy += (Math.random() - 0.5) * 0.014
          p.vx *= 0.955
          p.vy *= 0.955
        } else {
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }
        p.x += p.vx
        p.y += p.vy

        ctx.save()
        ctx.globalAlpha = p.alpha

        // Glow halo
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5.5)
        halo.addColorStop(0, p.accent ? 'rgba(217,79,37,0.22)' : 'rgba(255,255,255,0.065)')
        halo.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 5.5, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.accent ? PRIMARY : '#ffffff'
        ctx.fill()
        ctx.restore()
      }

      // Connection lines (desktop only, before fade)
      if (!mobile && elapsed < 6.2) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x
            const dy = pts[i].y - pts[j].y
            const d = Math.sqrt(dx * dx + dy * dy)
            if (d < 72) {
              ctx.save()
              ctx.globalAlpha = (1 - d / 72) * 0.09
              ctx.strokeStyle = '#ffffff'
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(pts[i].x, pts[i].y)
              ctx.lineTo(pts[j].x, pts[j].y)
              ctx.stroke()
              ctx.restore()
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Phase schedule
  useEffect(() => {
    const add = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms)
      timersRef.current.push(id)
    }

    add(() => setPhase('reveal'), 2385)
    add(() => setPhase('underline'), 3540)
    add(() => { setPhase('tagline'); setShowCursor(true) }, 3770)
    add(() => setPhase('fadeout'), 5000)
    add(() => onDoneRef.current(), 5540)

    return () => { timersRef.current.forEach(clearTimeout) }
  }, [])

  // Clip-path reveal (100 → 0)
  useEffect(() => {
    if (phase !== 'reveal') return
    let pct = 100
    const id = setInterval(() => {
      pct = Math.max(0, pct - 6)
      setRevealPct(pct)
      if (pct <= 0) clearInterval(id)
    }, 14)
    return () => clearInterval(id)
  }, [phase])

  // Underline
  useEffect(() => {
    if (phase === 'underline') setShowUnderline(true)
  }, [phase])

  // Typing
  useEffect(() => {
    if (phase !== 'tagline') return
    let i = 0
    const id = setInterval(() => {
      i++
      setTypedCount(i)
      if (i >= TAGLINE.length) {
        clearInterval(id)
        window.setTimeout(() => setShowCursor(false), 600)
      }
    }, 42)
    return () => clearInterval(id)
  }, [phase])

  // Fade out
  useEffect(() => {
    if (phase !== 'fadeout') return
    let op = 1
    const id = setInterval(() => {
      op = Math.max(0, op - 0.062)
      setOpacity(op)
      if (op <= 0) clearInterval(id)
    }, 22)
    return () => clearInterval(id)
  }, [phase])

  return (
    <div
      className="intro-screen"
      style={{ opacity, pointerEvents: opacity <= 0 ? 'none' : 'all' }}
    >
      <canvas ref={canvasRef} className="intro-canvas" />

      <div className="intro-content">
        <div className="intro-title-group">
          <h1
            className="intro-title"
            style={{ clipPath: `inset(0 ${revealPct}% 0 0)` }}
          >
            LUCAS MAGALHÃES
          </h1>
          <div className={`intro-underline${showUnderline ? ' intro-underline--on' : ''}`} />
        </div>

        <p className="intro-tagline">
          {TAGLINE.slice(0, typedCount)}
          {showCursor && <span className="intro-cursor" />}
        </p>
      </div>
    </div>
  )
}
