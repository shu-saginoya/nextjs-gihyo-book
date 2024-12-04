import { ReactNode } from 'react'

export type BoxProps = {
  children: ReactNode
  className?: string
}

/**
 * Box コンポーネント
 * レイアウトの調整に利用する
 */
const Box = ({ children, className = '' }: BoxProps) => {
  return <div className={className}>{children}</div>
}

export default Box
