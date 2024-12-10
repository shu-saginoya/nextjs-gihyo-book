/* eslint-disable prettier/prettier */
import React from 'react'

export type TextVariant = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'

export type TextProps = {
  children: React.ReactNode
  variant?: TextVariant
}

const variants = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}

/**
 * テキスト
 *
 */
const Text: React.FC<TextProps> = ({ children, variant = 'base' }) => {
  const style = variants[variant]

  return <span className={style}>{children}</span>
}

export default Text
