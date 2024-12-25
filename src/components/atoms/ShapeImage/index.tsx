import Image from 'next/image'
import React from 'react'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = {
  src: string
  width: number
  height: number
  alt: string
  shape?: ImageShape
}

const variants = {
  // 円形
  circle: `rounded-full`,
  // 四角形
  square: `rounded-none`,
}

/**
 * シェイプイメージ
 */
const ShapeImage: React.FC<ShapeImageProps> = ({
  src,
  width,
  height,
  alt,
  shape = 'circle',
}) => {
  const style = variants[shape]

  return (
    <Image
      src={src}
      width={Number(width)}
      height={Number(height)}
      alt={alt}
      className={style}
    />
  )
}

export default ShapeImage
