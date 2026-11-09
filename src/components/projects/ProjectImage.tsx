import { useState } from 'react'
import { LuImage } from 'react-icons/lu'
import { cn } from '@/lib/cn'

interface ProjectImageProps {
  src?: string
  alt: string
  className?: string
}

/** Project screenshot, with a gradient placeholder while the image is missing. */
export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex items-center justify-center bg-linear-to-br from-dark-purple to-dark-turquoise text-white/40',
          className,
        )}
      >
        <LuImage className="size-10" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  )
}
