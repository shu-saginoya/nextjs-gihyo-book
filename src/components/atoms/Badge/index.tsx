/* eslint-disable prettier/prettier */
import React from 'react'

export type BadgeProps = {
  /**
   * バッジのテキスト
   */
  content: string
  /**
   * バッジの色
   */
  backgroundColor: string
}

const baseStyle =
  'rounded-full h-5 min-w-5 inline-flex items-center justify-center'

/**
 * バッジ
 */
const Badge: React.FC<BadgeProps> = ({ content, backgroundColor }) => {
  return (
    <div className={`${baseStyle}`} style={{ backgroundColor }}>
      <span className="text-xs text-white">{content}</span>
    </div>
  )
}

export default Badge
