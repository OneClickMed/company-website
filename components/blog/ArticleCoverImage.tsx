import Image from 'next/image'
import { canOptimizeRemoteImage } from '@/lib/image'

interface ArticleCoverImageProps {
  src: string
  alt: string
  sizes: string
  preload?: boolean
}

export default function ArticleCoverImage({
  src,
  alt,
  sizes,
  preload = false,
}: ArticleCoverImageProps) {
  if (!canOptimizeRemoteImage(src)) {
    return (
      <img
        src={src}
        alt={alt}
        loading={preload ? 'eager' : 'lazy'}
        fetchPriority={preload ? 'high' : 'auto'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={70}
      preload={preload}
      sizes={sizes}
      className="object-cover"
    />
  )
}
