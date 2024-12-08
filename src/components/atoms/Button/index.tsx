/* eslint-disable prettier/prettier */
import React from 'react'

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: () => void
}

const baseStyle = 'text-white border-0'
const disabledStyle = 'opacity-50 cursor-not-allowed'

const variants = {
  // プライマリ
  primary: `${baseStyle} bg-primary hover:bg-primary-dark`,
  // セカンダリ
  secondary: `${baseStyle} bg-secondary hover:bg-secondary-dark`,
  // デンジャー
  danger: `${baseStyle} bg-danger hover:bg-danger-dark`,
}

/**
 * Button
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  disabled = false,
  onClick,
}) => {
  const style = variants[variant]

  return (
    <button
      className={`${style} ${disabled ? disabledStyle : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
