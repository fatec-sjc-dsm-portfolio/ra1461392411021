import type { CSSProperties } from 'react'
import { cn } from '@/lib/cn'

interface Star {
  x: number // % from left
  y: number // % from top
  size: number // px
  rotation: number // deg
  duration: number // s
  delay: number // s
  minOpacity: number
}

/** Small deterministic PRNG so the sky looks the same on every load. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const between = (rand: () => number, min: number, max: number) => min + rand() * (max - min)

/** Area (in %) kept free of big stars so they don't sit behind the hero text. */
const TEXT_ZONE = { xMin: 22, xMax: 78, yMin: 28, yMax: 82 }

const inTextZone = (x: number, y: number) =>
  x > TEXT_ZONE.xMin && x < TEXT_ZONE.xMax && y > TEXT_ZONE.yMin && y < TEXT_ZONE.yMax

function generateStars(
  count: number,
  seed: number,
  opts: { size: [number, number]; avoidText: boolean; minOpacity: [number, number] },
): Star[] {
  const rand = mulberry32(seed)
  const stars: Star[] = []

  while (stars.length < count) {
    const x = between(rand, 2, 98)
    const y = between(rand, 4, 90)
    if (opts.avoidText && inTextZone(x, y)) continue

    stars.push({
      x,
      y,
      size: between(rand, ...opts.size),
      rotation: between(rand, 30, 60),
      duration: between(rand, 2.5, 6),
      delay: between(rand, 0, 5),
      minOpacity: between(rand, ...opts.minOpacity),
    })
  }
  return stars
}

// Computed once at module load (not during render).
const DIAMONDS = generateStars(14, 7, { size: [8, 16], avoidText: true, minOpacity: [0.25, 0.5] })
const DUST = generateStars(45, 42, { size: [1.5, 3], avoidText: false, minOpacity: [0.05, 0.25] })

const starStyle = (star: Star, rotate: boolean): CSSProperties =>
  ({
    left: `${star.x}%`,
    top: `${star.y}%`,
    width: star.size,
    height: star.size,
    '--star-rotation': rotate ? `${star.rotation}deg` : '0deg',
    '--twinkle-duration': `${star.duration}s`,
    '--twinkle-delay': `${star.delay}s`,
    '--twinkle-min': star.minOpacity,
  }) as CSSProperties

interface StarFieldProps {
  className?: string
}

export default function StarField({ className }: StarFieldProps) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {DUST.map((star, i) => (
        <span
          key={`dust-${i}`}
          className="absolute animate-twinkle rounded-full bg-white"
          style={starStyle(star, false)}
        />
      ))}
      {DIAMONDS.map((star, i) => (
        <span
          key={`diamond-${i}`}
          className="absolute animate-twinkle rounded-[2px] bg-zinc-200 shadow-[0_0_8px_rgb(255_255_255/0.35)]"
          style={starStyle(star, true)}
        />
      ))}
    </div>
  )
}
